const chart = document.querySelector("#chart").getContext('2d');

//create a new chart instance
new Chart(chart,{
    type:'line',
    data:{
        labels:["Jan","Feb","March","April","May","June","July","August","September","October","November","December"],
        datasets:[
            {
                label: "BTC",
                data:[29374,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor:'red',
                borderWidth:2
            },
            {
                label: "ETH",
                data:[31500,41000,88800,26000,36684,36684,33572,39974,48847,48116,61004],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click',() =>{
    sidebar.style.dispaly = "block";
})

closeBtn.addEventListener('click',() =>{
    sidebar.style.dispaly = "none";
})
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    
    themeBtn.querySelector('span:last-child').classList.toggle('active');

})
