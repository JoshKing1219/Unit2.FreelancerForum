const freelancers = [
    {name: "Benny", job: "Courier", price: 50},
    {name: "Harold", job: "Gardener", price: 30},
    {name: "Curie", job: "Bodyguard", price: 100},
];

const newFreelancers = [
    {name: "Virgil", job: "Biologist", price: 20},
    {name: "Nate", job: "Soldier", price: 80},
    {name: "Cass", job: "Bodyguard", price: 50},
    {name: "Arcade", job: "Doctor", price: 60},
    {name: "Kimball", job: "Politician", price: 150},
    {name: "J. Eden", job: "Politician", price: 200},
];

function averagePrice() {
    /** 
     * I set up office hours to help with this part
     * because I can't seem to figure out how to calculate
     * the average price from two arrays.
    */
};

function init () {
    const root = document.querySelector('#root');
    
    const freelancerTitle = document.createElement('h1');
    freelancerTitle.innerText = "Freelancer Forum";
    root.append(freelancerTitle);

    const freelancerDescrip = document.createElement('h3')
    freelancerDescrip.innerText = `The average starting price is $${averagePrice()}.`;
    root.append(freelancerDescrip);

    const freelancerTable = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    for (let key of Object.keys(freelancers[0])) {
        const th = document.createElement('th');
        th.innerText = key;

        thead.appendChild(th);
    }

    freelancerTable.appendChild(thead);
    freelancerTable.appendChild(tbody);
    root.appendChild(freelancerTable);

    renderFreelancers();
}

function renderFreelancers() {
    const freelancerTable = document.querySelector('tbody');

    const freelancerElements = freelancers.map(freelancer => {
        const row = document.createElement('tr');

        const p_name = document.createElement('td');
        p_name.innerText = freelancer.name;

        const p_job = document.createElement('td');
        p_job.innerText = freelancer.job;

        const p_price = document.createElement('td');
        p_price.innerText = freelancer.price;

        row.appendChild(p_name);
        row.appendChild(p_job);
        row.appendChild(p_price);

        return row;
    });

    freelancerTable.replaceChildren(...freelancerElements);
};

function addFreelancer() {
    if (newFreelancers.length > 0) {
        const newFreelancer = newFreelancers.pop();
        freelancers.push(newFreelancer);
        renderFreelancers();
    }
};

setInterval(addFreelancer, 1000);

init();