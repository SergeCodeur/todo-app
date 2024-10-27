const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    completed: req.body.completed || false,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { completed } = req.body;

    if (typeof completed !== "boolean") {
      return res.status(400).json({
        message: "completed field must be a boolean",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: `Task not found with id: ${taskId}`,
      });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Error updating task",
      error: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
