const cards = [
    {
      name: "Alice Johnson",
      qualification: "Bachelor of science",
      age: 22,
      birthday: "2002-03-15",
      image: "1.jpg"
    },
    {
      name: "Bob Smith",
      qualification: "Master of Arts",
      age: 24,
      birthday: "2000-07-09",
      image: "2.jpg"
    },
    {
      name: "Charlie Brown",
      qualification: "Bachelor of Engineering",
      age: 23,
      birthday: "2001-11-19",
      image: "3.jpg"
    },
    {
        name: "Daisy Miller",
        qualification: "Doctor of Medicine",
        age: 27,
        birthday: "1997-05-30",
        image: "4.jpg"
      },
      {
        name: "Ethan Wilson",
        qualification: "Bachelor of Commerce",
        age: 21,
        birthday: "2002-03-15",
        image: "18.jpg"
      },
      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "19.jpg"
      },

      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "20.jpg"
      },

      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "21.jpg"
      },

      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "22.jpg"
      },

      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "23.jpg"
      },

      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "24.jpg"
      },
      {
        name: "Alice Johnson",
        qualification: "Bachelor of science",
        age: 22,
        birthday: "2002-03-15",
        image: "1.jpg"
      },
    
    
  ];
  
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  wrapper.id = "wrap";
  
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
  
    const cardUpElement = document.createElement("div");
    cardUpElement.className = "card-up";
  
    const imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.alt = "";
  
    cardUpElement.appendChild(imageElement);
  
    const cardDownElement = document.createElement("div");
    cardDownElement.className = "card-down";
  
    const nameElement = document.createElement("h5");
    nameElement.textContent = `Name: ${card.name}`;
  
    const qualificationElement = document.createElement("h5");
    qualificationElement.textContent = `Qualification: ${card.qualification}`;
  
    const ageElement = document.createElement("h5");
    ageElement.textContent = `Age: ${card.age}`;
  
    const birthdayElement = document.createElement("h5");
    birthdayElement.textContent = `Birthday: ${card.birthday}`;
  
    cardDownElement.appendChild(nameElement);
    cardDownElement.appendChild(qualificationElement);
    cardDownElement.appendChild(ageElement);
    cardDownElement.appendChild(birthdayElement);
  
    cardElement.appendChild(cardUpElement);
    cardElement.appendChild(cardDownElement);
  
    wrapper.appendChild(cardElement);
  });
  
  document.body.appendChild(wrapper);