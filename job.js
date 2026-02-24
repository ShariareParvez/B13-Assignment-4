let interViewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let totalCounts = document.getElementById('totalCount');
let interviewCounts = document.getElementById('interviewCount');
let rejectedCounts = document.getElementById('rejectedCount');
let totalJobs = document.getElementById('totalJob');
let deleteBtn = document.getElementById('delete-btn');

const jobCard = document.getElementById('job-card');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


function calculateCounts() {
  totalCounts.innerText = jobCard.children.length;
  interviewCounts.innerText = interViewList.length;
  rejectedCounts.innerText = rejectedList.length;
  totalJobs.innerText = jobCard.children.length;
}


calculateCounts();

function toggleStyle(id) {

  currentStatus = id;

  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  

  allFilterBtn.classList.add('bg-white', 'text-black');
  interviewFilterBtn.classList.add('bg-white', 'text-black');
  rejectedFilterBtn.classList.add('bg-white', 'text-black');

  const selected = document.getElementById(id);
  selected.classList.remove('bg-white', 'text-black');
  selected.classList.add('bg-[#3B82F6]', 'text-white');

  const emptySection = document.getElementById('empty-job');

  if (id === 'all-filter-btn') {
    jobCard.classList.remove('hidden');
    filteredSection.classList.add('hidden');
    
    if (jobCard.children.length === 0) {
      emptySection.classList.remove('hidden');
    } else {
      emptySection.classList.add('hidden');
    }
    calculateCounts();
  } else if (id === 'interview-filter-btn') {
    jobCard.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderInterview();
  } else if (id === 'rejected-filter-btn') {
    jobCard.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderRejected();
  }
}



mainContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('interview-btn')) {

    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.company').innerText;
    const jobTitle = parentNode.querySelector('.jobtitle').innerText;
    const locations = parentNode.querySelector('.location').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notesJob = parentNode.querySelector('.notes').innerText;

    const jobData = {
      companyName,
      jobTitle,
      locations,
      jobType,
      salary,
      notesJob
    };

    parentNode.querySelector('.applied').innerText = 'Interview';

    const existingJob = interViewList.find(item => item.companyName === companyName);

    if (!existingJob) {
      interViewList.push(jobData);
    }

    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    if (currentStatus === 'interview-filter-btn') {
      renderInterview();
    }
    else if (currentStatus === 'rejected-filter-btn') {
      renderRejected();
    }

    calculateCounts();
  }else if (event.target.classList.contains('rejected-btn')) {

    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.company').innerText;
    const jobTitle = parentNode.querySelector('.jobtitle').innerText;
    const locations = parentNode.querySelector('.location').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const notesJob = parentNode.querySelector('.notes').innerText;

    const jobData = {
      companyName,
      jobTitle,
      locations,
      jobType,
      salary,
      notesJob,
    };

    parentNode.querySelector('.applied').innerText = 'Rejected';

    const existingJob = rejectedList.find(item => item.companyName === companyName);

    if (!existingJob) {
      rejectedList.push(jobData);
    }

    interViewList = interViewList.filter(item => item.companyName !== companyName);

    if (currentStatus === 'interview-filter-btn') {
      renderInterview();
    }
    else if (currentStatus === 'rejected-filter-btn') {
      renderRejected();
    }

    calculateCounts();
  } else if (event.target.closest('#delete-btn')) {

    event.preventDefault();

    const parentNode = event.target.closest('.cards-1');
    const companyName = parentNode.querySelector('.company').innerText;

    parentNode.remove();

    interViewList = interViewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    const emptySection = document.getElementById('empty-job');
    if (currentStatus === 'interview-filter-btn') {
      renderInterview();
    } else if (currentStatus === 'rejected-filter-btn') {
      renderRejected();
    } else if (currentStatus === 'all-filter-btn') {
  
      if (jobCard.children.length === 0) {
        emptySection.classList.remove('hidden');
      } else {
        emptySection.classList.add('hidden');
      }
    }

    calculateCounts();
  }

});

function renderInterview() {

  filteredSection.innerHTML = '';
  const emptySection = document.getElementById('empty-job');

  if (interViewList.length === 0) {
    emptySection.classList.remove('hidden');
    return;
  }

  emptySection.classList.add('hidden');

  for (let interview of interViewList) {

    let div = document.createElement('div');
    div.className = `flex justify-between bg-white cards-1 p-[24px] mb-[16px]`;

    div.innerHTML = `
      <div>
        <p class="company text-[#002C5C]-[18px] font-bold">${interview.companyName}</p>
        <p class="jobtitle text-[#64748B]-4 text-[#64748B] text-[16px]">${interview.jobTitle}</p>
        <div class="flex gap-3 justify-between-start job-info my-[20px]">
          <p class="location text-[#64748B]">${interview.locations}</p>
          <p>•</p>
          <p class="job-type text-[#64748B]">${interview.jobType}</p>
          <p>•</p>
          <p class="salary text-[#64748B]">${interview.salary}</p>
        </div>
        <p class="bg-[#EEF4FF] inline-block px-[12px] py-[8px] mb-2 text-[#002C5C] font-medium applied">
          Interview
        </p>
        <p class="text-[#323B49] notes">${interview.notesJob}</p>
        <div class="mt-[20px]">
          <button class="bg-white text-[#10B981] px-[20px] py-[8px] rounded-[6px] font-medium border-[2px] border-[#10B981] interview-btn">
            Interview
          </button>
          <button class="bg-white border-[2px] border-[#EF4444] text-[#EF4444] px-[20px] py-[8px] rounded-[6px] font-medium rejected-btn">
            Rejected
          </button>
        </div>
      </div>
    `;

    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = '';
  const emptySection = document.getElementById('empty-job');

  if (rejectedList.length === 0) {
    emptySection.classList.remove('hidden');
    return;
  }

  emptySection.classList.add('hidden');

  for (let reject of rejectedList) {
    let div = document.createElement('div');
    div.className = `flex justify-between bg-white cards-1 p-[24px] mb-[16px]`;
    div.innerHTML = `
      <div>
        <p class="company text-[#002C5C]-[18px] font-bold">${reject.companyName}</p>
        <p class="jobtitle text-[#64748B]-4 text-[#64748B] text-[16px]">${reject.jobTitle}</p>
        <div class="flex gap-3 justify-between-start job-info my-[20px]">
          <p class="location text-[#64748B]">${reject.locations}</p>
          <p>•</p>
          <p class="job-type text-[#64748B]">${reject.jobType}</p>
          <p>•</p>
          <p class="salary text-[#64748B]">${reject.salary}</p>
        </div>
        <p class="bg-[#EEF4FF] inline-block px-[12px] py-[8px] mb-2 text-[#002C5C] font-medium applied">
          Rejected
        </p>
        <p class="text-[#323B49] notes">${reject.notesJob}</p>
        <div class="mt-[20px]">
          <button class="bg-white text-[#10B981] px-[20px] py-[8px] rounded-[6px] font-medium border-[2px] border-[#10B981] interview-btn">
            Interview
          </button>
          <button class="bg-white border-[2px] border-[#EF4444] text-[#EF4444] px-[20px] py-[8px] rounded-[6px] font-medium rejected-btn">
            Rejected
          </button>
        </div>
      </div>
    `;
    filteredSection.appendChild(div);
  }
}

deleteBtn.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.closest('.cards-1').remove();
    calculateCounts();
  }
  });