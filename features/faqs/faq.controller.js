const Faq = require('./faq.model');

// GET all FAQs
exports.getAllFaqs = async (req, res, next) => {
  try {
    const faqs = await Faq.findAll();
    res.status(200).json({ success: true, data: faqs });
  } catch (err) {
    next(err);
  }
};

// GET one FAQ by ID
exports.getFaqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findById(id);
    if (!faq) return res.status(404).json({ success: false, message: 'FAQ not found' });
    res.status(200).json({ success: true, data: faq });
  } catch (err) {
    next(err);
  }
};

// CREATE new FAQ
exports.createFaq = async (req, res, next) => {
  try {
    const faqData = {
      question: req.body.question,
      answer_en: req.body.answer_en,
      answer_fr: req.body.answer_fr,
      is_enabled: req.body.is_enabled ?? true,
      created_by: req.body.created_by || 1,
      updated_by: req.body.updated_by || 1,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const faq = await Faq.create(faqData);
    res.status(201).json({ success: true, data: faq[0] });
  } catch (err) {
    next(err);
  }
};

// UPDATE FAQ
exports.updateFaq = async (req, res, next) => {
  try {
    const { id } = req.params;

    const faqData = {
      question: req.body.question,
      answer_en: req.body.answer_en,
      answer_fr: req.body.answer_fr,
      is_enabled: req.body.is_enabled,
      updated_by: req.body.updated_by || 1,
      updated_at: new Date(),
    };

    const updated = await Faq.update(id, faqData);

    if (!updated || updated.length === 0) {
      return res.status(404).json({ success: false, message: 'FAQ not found' });
    }

    res.status(200).json({ success: true, data: updated[0] });
  } catch (err) {
    next(err);
  }
};

// DELETE FAQ
exports.deleteFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Faq.delete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'FAQ not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
