let interViewList = [ ];
let rejectedList = [ ];

let totalCounts = document.getElementById('totalCount');
let interviewCounts = document.getElementById('interviewCount');
let rejectedCounts = document.getElementById('rejectedCount');

const jobCard =document.getElementById('job-card');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



function calculateCounts() {
    totalCounts.innerText = jobCard.children.length;
    interviewCounts.innerText = interViewList.length;
    rejectedCounts.innerText = rejectedList.length;
}

calculateCounts();

function toggleStyle(id){
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

  allFilterBtn.classList.add('bg-white', 'text-black');
  interviewFilterBtn.classList.add('bg-white', 'text-black');
  rejectedFilterBtn.classList.add('bg-white', 'text-black');

  const selected = document.getElementById(id);
  selected.classList.remove('bg-white', 'text-black');
  selected.classList.add('bg-[#3B82F6]', 'text-white');
}

mainContainer.addEventListener('click', function(event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector('.company').innerText;
  const jobTitle = parentNode.querySelector('.jobtitle').innerText;
  const locations = parentNode.querySelector('.location').innerText;
  const jobType = parentNode.querySelector('.job-type').innerText;
  const appliedJob = parentNode.querySelector('.applied').innerText;
  const notesJob = parentNode.querySelector('.notes').innerText;

  console.log(companyName,jobTitle,locations,jobType,appliedJob,notesJob);
})  
  