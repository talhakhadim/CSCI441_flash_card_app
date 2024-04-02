// Define flashcard data 
    const flashcards = {
      category1: [
        { question: "Definition of an algorithm", answer: "An algorithm is a sequence of unambiguous instructions for solving a problem (for obtaining a required output for any legitimate input in a finite amount of time)" },
        { question: "What is time efficiency?", answer: "Time efficiency is how fast an algorithm runs" },
        
      ],
      category2: [
        { question: "What is a data structure? ", answer: "A data structure is a way of organizing the data so that the data can be used efficiently. Different kinds of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks." },
        { question: "What is a stack?", answer: "A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out)" },
        
      ],
	  category3: [
	  { question: "True or False: Using the namespace definition, using namespace std;, allows you to utilize cout and cin in C++.", answer: "True"},
		  { question: "What symbols creates a single line comment and a multi line comment in C++?", answer: "// allows a single line comment and /* text */ allows multi line comments in C++"},
	  ],
      
    };
	

    let currentFlashcardIndex = 0;
    let currentCategory = "all"; 

    
    function loadFlashcards() {
      currentCategory = document.getElementById("category").value;
      currentFlashcardIndex = 0;
      loadFlashcard();
      updateFlashcardTopic();
    }

    //function to update flashcard topic

     function updateFlashcardTopic(){
      const categorySelect = document.getElementById("category");
      const selectedCategoryOption = categorySelect.options[categorySelect.selectedIndex];
      document.querySelector(".h2").textContent = selectedCategoryOption.textContent;
    }

    // Function to load the current flashcard
    function loadFlashcard() {
      const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
      const currentFlashcard = currentFlashcards[currentFlashcardIndex];
      document.getElementById("question").textContent = currentFlashcard.question;
      document.getElementById("answer").textContent = currentFlashcard.answer;
    }
	
	//Event Listener to allow flipping flash cards by clicking
	const flashcard = document.querySelector(".flashcard");
	flashcard.addEventListener("click", () => {
		flashcard.classList.toggle("flipCard");
	})
	

    // Function to get all flashcards if "All" category is selected
    function getAllFlashcards() {
      return Object.values(flashcards).flat();
    }

    // Function to show the previous flashcard
    function prevFlashcard() {
      const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
      currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
      loadFlashcard();
    }

    // Function to show the next flashcard
    function nextFlashcard() {
      const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
      currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
      loadFlashcard();
    }

    // Initial load
    loadFlashcards();
  
