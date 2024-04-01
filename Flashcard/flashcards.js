
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
      
    };

    let currentFlashcardIndex = 0;
    let currentCategory = "all"; 

    
    function loadFlashcards() {
      currentCategory = document.getElementById("category").value;
      currentFlashcardIndex = 0;
      loadFlashcard();
    }

    // Function to load the current flashcard
    function loadFlashcard() {
      const currentFlashcards = currentCategory === "all" ? getAllFlashcards() : flashcards[currentCategory];
      const currentFlashcard = currentFlashcards[currentFlashcardIndex];
      document.getElementById("question").textContent = currentFlashcard.question;
      document.getElementById("answer").textContent = currentFlashcard.answer;
    }

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
  