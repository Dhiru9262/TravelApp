import Package from "../models/Package.js";

// ✅ Create Package (Admin Only)
export const createPackage = async (req, res) => {
  try {
    const newPackage = await Package.create(req.body);
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Packages (Public)
export const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Single Package
export const getPackageById = async (req, res) => {
  try {
    const packageItem = await Package.findById(req.params.id);

    if (!packageItem) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json(packageItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Package (Admin Only)
export const updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(updatedPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Package (Admin Only)
export const deletePackage = async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
