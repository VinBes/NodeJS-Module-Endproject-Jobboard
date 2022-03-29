/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_experience").del();
  await knex("seeker_experience").insert([
    {
      seeker_id: 1,
      experience: "Tech Recruiter, APAC at Meta; Director, Front office & FintechDirector at Vantage Search",
    },
    {
      seeker_id: 2,
      experience: "IT Commerce Division Consultant at Robert Walters",
    },
    {
      seeker_id: 3,
      experience: "Recruitment Consultant at InfoDrive Solutions",
    },
    {
      seeker_id: 4,
      experience: "UX/UI Designer at AIA; UX/UI Designer at Twopresents",
    },
    {
      seeker_id: 5,
      experience: "BI Specialist at ASB Bank; Database Specialist at ASB Bank",
    },
    {
      seeker_id: 6,
      experience: "IT Training Consultant at Eversheds Sutherland",
    },
    {
      seeker_id: 7,
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper Integer finibus eu turpis vitae hendrerit. Cras interdum leo sit amet purus fermentum interdum. Aenean molestie, tellus maximus consequat cursus, augue orci lobortis quam, vitae posuere sem metus vel sapien. Sed rhoncus arcu scelerisque lobortis eleifend. Fusce eleifend lectus vitae maximus porttitor. Integer dictum id diam vitae vestibulum. In tempor eget nunc at malesuada. Mauris porta auctor iaculis. Maecenas accumsan lobortis est, non euismod lectus dictum non. Duis congue consequat ex quis condimentuCurabitur in auctor elit. Aenean quis commodo magna. Nulla condimentum libero leo, et dictum mauris sagittis id. Nam bibendum a lacus id dictum. Vestibulum non massa fringilla, dictum nunc quis, tincidunt purus. Pellentesque semper viverra hendrerit. Nunc auctor eleifend porta. Phasellus sed ante nibh. Morbi id velit nec ante tincidunt malesuada. Suspendisse eu rhoncus nibh, eu ornare nunc. Nam venenatis sagittis risus, at consequat magna maximus eu. Donec a orci volutpat, ullamcorper nisl a, vehicula ipsum. Quisque a viverra eNulla velit lacus, placerat eu urna viverra, mattis pharetra tortor. Sed vel efficitur est. Ut tincidunt lorem sed quam blandit, eu posuere lacus eleifend. Fusce sagittis eros eu erat imperdiet fringilla. Nam eget varius mi. In hac habitasse platea dictumst. Etiam vitae orci magna. Morbi dui tellus, egestas ut vehicula nec, lobortis a nibh.",
    },
    {
      seeker_id: 8,
      experience:
        "Digital Skills Officer / IT Trainer at RNIB",
    },
    {
      seeker_id: 9,
      experience: "IT Trainer / Support Technician at Hugh James",
    },
    {
      seeker_id: 10,
      experience: "Analyst programmer at Zensis Limited",
    },
    {
      seeker_id: 11,
      experience: "Full Stack Engineer at Sanity Solutions",
    },
    {
      seeker_id: 12,
      experience: "Software Engineer at ClusterTech Limited",
    },
  ]);
};