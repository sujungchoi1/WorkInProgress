const { Router } = require("express");
const ProjectController = require('../controllers/project.controller');

const router = Router();

// module.exports = function(router){
//     router.get('/', AuthorController.findAllAuthors);
//     router.post('/new', AuthorController.createAuthor);
//     router.get('/:id', AuthorController.findOneAuthor);
//     router.put('/:id', AuthorController.updateAuthor);
//     router.delete('/:id', AuthorController.deleteAuthor);
// }

router.get('/', ProjectController.findAllProjects);
router.post('/new', ProjectController.createProject);
router.get('/:id', ProjectController.findOneProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;