const express = require('express');
const router = express.Router();
const faqController = require('./faq.controller');

router.get('/:id', faqController.getFaqById);
router.get('/', faqController.getAllFaqs);

router.post('/', faqController.createFaq);
router.put('/:id', faqController.updateFaq);
router.delete('/:id', faqController.deleteFaq);

module.exports = router;
