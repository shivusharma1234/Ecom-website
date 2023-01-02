const chart = document.querySelector("#chart").getContext('2d');

//create a new chart instance
new Chart(chart,{
    type:'line',
    data:{
        labels:["jan","Feb","March","April","May","june","july","August","september","October","November","december"],
        datasets:[
            {
                label: "Btc",
                data:[29374,33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor:'red',
                borderwidth:2
            },
            {
                label: "ETH",
                data:[31500,41000,88800,26000,36684,36684,33572,39974,48847,48116,61004],
                borderColor:'blue',
                borderwidth:2
            },
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
    document.body.classList.toggie('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    
    themeBtn.querySelector('span:last-child').classList.toggle('active');

})
