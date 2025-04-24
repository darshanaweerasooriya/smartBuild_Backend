
const JobPosting = require('../model/jobPosting.model');

const addJob = async (jobData, file) => {
    const job = new JobPosting ({
        ...jobData,
        image: file
        ?{
            data: file.buffer,
            contentType: file.mimetype
        }
        : undefined
    })

    await job.save();

    return job;
};

const getAllJobs = async() =>  {
    return await JobPosting.find();
}

const getJobId = async (id) =>{
    return await JobPosting.findById(id);
};

const updateJob = async (jobID, updateData, file) => {
    const updatedFields ={
        ...updateData,
    }

    if(file) {
        updatedFields.image ={
            data: file.buffer,
            contentType: file.mimetype
        }
    }

    return await job.findByIdAndUpdate(jobID, updatedFields, {new: true});
};

const deleteJob = async (jobID) => {
    return await job.findByIdAndDelete(jobID);
};

module.exports ={
    addJob,
    getAllJobs,
    getJobId,
    updateJob,
    deleteJob
}
