
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

const getAllJobs = async (filters) =>  {

    const query = {};
    if (filters.jobTitle){
        query.jobTitle = { $regex: filters.jobTitle, $options:'i'};

    }

    if (filters.location){
        query.location =  { $regex: filters.location, $options:'i'};
    }

    if (filters.jobType){
        query.jobType =  { $regex: filters.jobType, $options:'i'};
    }
    return await JobPosting.find(query);
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
