// main 函数
class Main {
  constructor () {

    // this.alterLine("MyStack Area");

    // let ms = new MyStack(10);
    // for (let i = 1; i <= 10 ; i++) {
    //     ms.push(i);
    //     console.log(ms.toString());
    // }

    // console.log(ms.peek());
    // this.show(ms.peek());

    // while (!ms.isEmpty()) {
    //   console.log(ms.toString());
    //   ms.pop();
    // }

    // this.alterLine("leetcode 20. 有效的括号");
    // let s = new Solution();
    // this.show(s.isValid("{ [ ( ) ] }"));
    // this.show(s.isValid(" [ ( ] ) "));

    // this.alterLine("MyQueue Area");
    // let mq = new MyQueue(10);
    // for (let i = 1; i <= 10 ; i++) {
    //     mq.enqueue(i);
    //     console.log(mq.toString());
    // }

    // console.log(mq.getFront());
    // this.show(mq.getFront());

    // while (!mq.isEmpty()) {
    //   console.log(mq.toString());
    //   mq.dequeue();
    // }
    
    // this.alterLine("MyLoopQueue Area");
    // let mlq = new MyQueue();
    // for (let i = 1; i <= 10 ; i++) {
    //     mlq.enqueue(i);
        // console.log(mlq.toString());
    // }

    // console.log(mlq.getFront());
    // this.show(mlq.getFront());

    // while (!mlq.isEmpty()) {
    //   console.log(mlq.toString());
    //   mlq.dequeue();
    // }

    // this.alterLine("Queues Comparison Area");
    // let mq = new MyQueue();
    // let mlq = new MyLoopQueue();
    // let performanceTest = new PerformanceTest();

    // let mqInfo = performanceTest.testQueue(mq, 10000);
    // let mlqInfo = performanceTest.testQueue(mlq, 10000);

    // this.alterLine("MyQueue Area");
    // console.log(mqInfo);
    // this.show(mqInfo);

    // this.alterLine("MyLoopQueue Area");
    // console.log(mlqInfo);
    // this.show(mlqInfo);

    // this.alterLine("MyLinkedList Area");
    // let mylinkedList = new MyLinkedList();

    // for (let i = 1; i <= 5 ; i++) {
    //   mylinkedList.addFirst(i);
    //   console.log(mylinkedList.toString());
    // }
    // mylinkedList.insert(2, 88888);
    // console.log(mylinkedList.toString());

    // mylinkedList.remove(2);
    // console.log(mylinkedList.toString());

    // mylinkedList.removeFirst();
    // console.log(mylinkedList.toString());

    // mylinkedList.removeLast();
    // console.log(mylinkedList.toString());
    
    // this.alterLine("MyLinkedListStack Area");
    // let myLinkedListStack = new MyLinkedListStack();
    // for (let i = 1; i <= 5 ; i++) {
    //   myLinkedListStack.push(i);
    //   console.log(myLinkedListStack.toString());
    // }

    // console.log(myLinkedListStack.peek());
    // this.show(myLinkedListStack.peek());

    // for (let i = 0; i < 5 ; i++) {
    //   console.log(myLinkedListStack.toString());
    //   myLinkedListStack.pop();
    // }
    
    // this.alterLine("Stacks Comparison Area");
    // let myStack = new MyStack();
    // let myLinkedListStack = new MyLinkedListStack();
    // let performanceTest = new PerformanceTest();

    // let myStackInfo = performanceTest.testStack(myStack, 100000);
    // let myLinkedListStackInfo = performanceTest.testStack(myLinkedListStack, 100000);

    // this.alterLine("MyStack Area");
    // console.log(myStackInfo);
    // this.show(myStackInfo);

    // this.alterLine("MyLinkedListStack Area");
    // console.log(myLinkedListStackInfo);
    // this.show(myLinkedListStackInfo);
    
    // this.alterLine("MyLinkedListQueue Area");
    // let myLinkedListQueue = new MyLinkedListQueue();
    // for (let i = 1; i <= 5 ; i++) {
    //   myLinkedListQueue.enqueue(i);
    //   console.log(myLinkedListQueue.toString());
    // }

    // console.log(myLinkedListQueue.getFront());
    // this.show(myLinkedListQueue.getFront());

    // for (let i = 0; i < 5 ; i++) {
    //   console.log(myLinkedListQueue.toString());
    //   myLinkedListQueue.dequeue();
    // }
    
    // this.alterLine("leetcode 203. 删除指定元素的所有节点");
    // let s = new Solution();

    // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
    // let node = new ListNode(null);
    // node.appendToLinkedListNode(arr);

    // console.log(node.toString());
    // let result = s.removeElements(node, 1);
    // console.log(result.toString());

    // this.alterLine("递归求和");
    // let calc = new Calc();
    // let arr = [1,2,3,4];
    
    // let arrInfo = `[`;
    // for (var i = 0; i < arr.length - 1; i++) {
    //   arrInfo += `${arr[i]},`
    // }
    // arrInfo += `${arr[arr.length - 1]}`;
    // arrInfo += `]`;
    // document.body.innerHTML += `${arrInfo}<br /><br />`;
    // this.show (calc.sum(arr));
    // this.show (calc.tailSum(arr));

    // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归)");
    // let s = new Solution();

    // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
    // let node = new ListNode(null);
    // node.appendToLinkedListNode(arr);

    // console.log(node.toString());
    // let result = s.removeElements(node, 2);
    // console.log(result.toString());
  
    // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归) 调试");
    // let s = new Solution();

    // let arr = [1,2,3];
    // let node = new ListNode(null);
    // node.appendToLinkedListNode(arr);
    // this.show(node);
    // s.removeElements(node, 2);
    
    // this.alterLine("MyBinarySearchTree Area");
    // let myBinarySearchTree = new MyBinarySearchTree();
    // let nums = [5, 3, 6, 8, 4, 2];
    // for (var i = 0; i < nums.length; i++) {
    //   myBinarySearchTree.add(nums[i]);
    // }

    // /////////////////
    // //      5      //
    // //    /   \    //
    // //   3    6    //
    // //  / \    \   //
    // // 2  4     8  //
    // /////////////////
    // myBinarySearchTree.preOrder(this.show);

    // this.show(myBinarySearchTree.contains(1));
    // console.log(myBinarySearchTree.contains(1));

    // this.alterLine("MyBinarySearchTree Area");
    // let myBinarySearchTree = new MyBinarySearchTree();
    // let nums = [5, 3, 6, 8, 4, 2];
    // for (var i = 0; i < nums.length; i++) {
    //   myBinarySearchTree.add(nums[i]);
    // }

    // /////////////////
    // //      5      //
    // //    /   \    //
    // //   3    6    //
    // //  / \    \   //
    // // 2  4     8  //
    // /////////////////
    
    // console.log(myBinarySearchTree.toString());
    
    this.alterLine("MyBinarySearchTree Area");
    let myBinarySearchTree = new MyBinarySearchTree();
    let nums = [5, 3, 6, 8, 4, 2];
    for (var i = 0; i < nums.length; i++) {
      myBinarySearchTree.add(nums[i]);
    }

    /////////////////
    //      5      //
    //    /   \    //
    //   3    6    //
    //  / \    \   //
    // 2  4     8  //
    /////////////////
    
    this.alterLine("MyBinarySearchTree PreOrder Area");
    myBinarySearchTree.preOrder(this.show);

    this.alterLine("MyBinarySearchTree NonRecursivePreOrder Area");
    myBinarySearchTree.nonRecursivePreOrder(this.show);

    this.alterLine("MyBinarySearchTree InOrder Area");
    myBinarySearchTree.inOrder(this.show);

    this.alterLine("MyBinarySearchTree PostOrder Area");
    myBinarySearchTree.postOrder(this.show);

    this.alterLine("MyBinarySearchTree LevelOrder Area");
    myBinarySearchTree.levelOrder(this.show);

  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 展示分割线
  alterLine (title) {
    let line = `--------------------${title}----------------------`
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}