import API from "./index";

export const createProject = async (project) => {
    try {
        const res = await API.post("/projects/new", project);
        return res.data;
    } catch (error) {
      console.log(error);
    }
  };

export const findAllProjects = async () => {
  try {
    const res = await API.get("/projects");
    return res.project;
  } catch (error) {
    console.log(error);
  }
};

export const findOneProject = async (id) => {
  try {
    const res = await API.get(`/projects/${id}`);
    return res.project;
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (id, product) => {
  try {
    const res = await API.put(`/projects/${id}`, product);
    return res.project;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await API.delete(`/projects/${id}`);
    return res.project;
  } catch (error) {
    console.log(error);
  }
}

