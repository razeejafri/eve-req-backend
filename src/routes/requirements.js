const express = require('express');
const router = express.Router();
const Requirement = require('../models/Requirement');

// POST /api/requirements - Create a new requirement
router.post('/', async (req, res) => {
  try {
    const {
      eventName, eventType, eventDate, location, venue, hiringFor,
      categoryData, contactInfo, description, urgency
    } = req.body;

    // Optional manual validation here, though mongoose will handle required fields

    const newRequirement = new Requirement({
      eventName, eventType, eventDate, location, venue, hiringFor,
      categoryData, contactInfo, description, urgency
    });

    const savedRequirement = await newRequirement.save();

    res.status(201).json({
      success: true,
      requirementId: savedRequirement._id,
      message: 'Requirement posted successfully'
    });
  } catch (error) {
    console.error('Error creating requirement:', error);
    res.status(400).json({ success: false, message: error.message || 'Validation Error' });
  }
});

// GET /api/requirements - Get all requirements
router.get('/', async (req, res) => {
  try {
    const { hiringFor, limit } = req.query;
    
    let query = {};
    if (hiringFor) {
      query.hiringFor = hiringFor;
    }

    let queryBuilder = Requirement.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      queryBuilder = queryBuilder.limit(parseInt(limit, 10));
    }

    const requirements = await queryBuilder.exec();

    res.status(200).json({ success: true, count: requirements.length, requirements });
  } catch (error) {
    console.error('Error fetching requirements:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// GET /api/requirements/:id - Get single requirement by ID
router.get('/:id', async (req, res) => {
  try {
    const requirement = await Requirement.findById(req.params.id);
    if (!requirement) {
      return res.status(404).json({ success: false, message: 'Requirement not found' });
    }
    res.status(200).json({ success: true, requirement });
  } catch (error) {
    console.error('Error fetching requirement:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
