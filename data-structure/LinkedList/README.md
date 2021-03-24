# Linked List
A linked list is a linear collection of elements which the position in memory is not continuous.  

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg" alt="linked-list.svg"/>

## Using the Code
You can use the implementation by importing it from the data-structure folder. For example if your main file is on the root folder. The import statement would be like:
    
    const LinkedList = required("./data-structure/LinkedList");

After you import the module, you can begin using it as:

    const linkedList = new LinkedList();

    // Adding Element
    linkedList.addFirst(0); // element added to the head of the linked list
    linkedList.addLast(1); // element added to the tail of the linked list

    // Removing Element
    linkedList.deleteFirst(); // delete element located on the head of the linked list
    linkedList.deleteLast(); // delete element located on the tail of the linked list
    linkedList.clear(); // delete all element in the linked list


    // Get the string representation of the linked list
    linkedList.toString();

    // Display the linked list on the console
    linkedList.display();
