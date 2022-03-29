// ================ Setting up and editting Finder Profile ==================

class SeekerProfileService {
  constructor(knex) {
    this.knex = knex;
  }

  async listprofile(seekerId) {
    console.log(`listprofile method called with seekerId: ${seekerId}`);
    let profile = [];
    if (typeof seekerId !== "undefined") {
      try {
        let seekerInfo = await this.knex
          .select("*")
          .from("seeker")
          .fullOuterJoin(
            "seeker_contact",
            "seeker.seeker_id",
            "seeker_contact.seeker_id"
          )
          .where("seeker.seeker_id", seekerId);
        profile.push(seekerInfo[0]);
        if (seekerInfo.length == 1) {
          let seekerCustom = await this.knex
            .select("*")
            .from("seeker_customfield")
            .where("seeker_customfield.seeker_id", seekerId);
          profile.push(seekerCustom);
        }
        if (seekerInfo.length == 1) {
          let seekerEducation = await this.knex
            .select("*")
            .from("seeker_education")
            .where("seeker_education.seeker_id", seekerId);
          profile.push(seekerEducation);
        }
        if (seekerInfo.length == 1) {
          let seekerExperience = await this.knex
            .select("*")
            .from("seeker_experience")
            .where("seeker_experience.seeker_id", seekerId);
          profile.push(seekerExperience);
          return profile;
        } else {
          console.log("Unknown seeker");
        }
      } catch (error) {
        console.log("error reading profile from database: " + error);
      }
    }
  }

  //================================still finder copy
  // we add the option of adding 2 custom fields into your finderprofile
  // async addcustom(infoTitle, infoContent, finderId) {
  //   console.log(
  //     `add method called with infoTitle: ${infoTitle}, infoContent: ${infoContent} and finderId: ${finderId}`
  //   );
  //   try {
  //     await this.knex
  //       .select("*")
  //       .from("finder_customfield")
  //       .where("finder_customfield.finder_id", finderId)
  //       .insert({
  //         finder_id: finderId,
  //         customfield_title: infoTitle,
  //         customfield_content: infoContent,
  //       })
  //       .into("finder_customfield");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async updateProfile(seekerInfo, seekerId) {
    let profile = [];
    console.log(seekerInfo);
    console.log(
      `seeker updateProfile method called with info: ${seekerInfo} and finderId: ${seekerId}`
    );
    try {
      let profile = await this.knex
        .select("*")
        .from("seeker")
        .fullOuterJoin(
          "seeker_contact",
          "seeker.seeker_id",
          "seeker_contact.seeker_id"
        )
        .where("seeker.seeker_id", seekerId);
      if (profile.length == 1) {
        await this.knex("seeker").where("seeker.seeker_id", seekerId).update({
          first_name: seekerInfo.first_name,
          surname: seekerInfo.surname,
          mobile_number: seekerInfo.mobile_number,
          home_number: seekerInfo.home_number,
          email1: seekerInfo.email1,
          links: seekerInfo.link,
        });
      } else {
        console.log(`Error: unable to find the correct seeker profile`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateCustom(customfield_Id, customfieldInfo, finderId) {
    console.log(
      `updateCustom method called with customfieldId: ${customfield_Id} with finderId: ${finderId}`
    );
    console.log(customfieldInfo);
    try {
      let customfields = await this.knex
        .select("*")
        .from("finder_customfield")
        .where({
          finder_id: finderId,
          customfield_id: customfield_Id,
        });
      if (customfields.length === 1) {
        return await this.knex("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customfield_Id,
          })
          .update({
            customfield_title: customfieldInfo.customfield_Title,
            customfield_content: customfieldInfo.customfield_Content,
          });
      } else {
        console.log(`Error: unable to update customfield`);
      }
    } catch (error) {
      console.log(`there is an error: ${error}`);
    }
  }

  async removeCustom(customfield_Id, finderId) {
    console.log(
      `removeCustom method called with customfield_id: ${customfield_Id} and finderId: ${finderId}`
    );
    try {
      let customfield = await this.knex
        .select("*")
        .from("finder_customfield")
        .where({
          finder_id: finderId,
          customfield_id: customfield_Id,
        });
      if (customfield.length === 1) {
        return await this.knex("finder_customfield")
          .where({
            finder_id: finderId,
            customfield_id: customfield_Id,
          })
          .del();
      } else {
        console.log(`error in selecting the correct customfield`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SeekerProfileService;
