// 1.Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
var twoSum = function(nums, target) {
    var result = ""
    for (var i = 0; i < nums.length - 1; i++) {
        /*此处 i 限定范围为 nums.length - 1,
          因为 nums[i] + nums[j] 是前项加后项，
          如果 i 定义域为 nums.length 的话，
          j 的定义域就会超项，
          此操作也可减少一次嵌套循环的过程
        */
        for (var j = i + 1; j < nums.length; j++) { //
            if (nums[i] + nums[j] == target) {
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
}
// 2.Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order and each of their nodes contain a single digit.
//Add the two numbers and return it as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var ListNode = function(val) { // 声明单点储存函数
    this.val = val; // 函数的调用方式决定了 this 的值，每次调用时 this 的值会有不同
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var sum = l1.val + l2.val; // 储存点的值相加
    var next1 = l1.next; // 调用 l1 的 next 属性进行赋值
    var next2 = l2.next; // 调用 l2 的 next 属性进行赋值
    var l3 = new ListNode(sum % 10);
    var node = l3;
    sum = Math.floor(sum / 10);
    while(next1 || next2 || sum !== 0) {
        sum += (next1?next1.val:0) + (next2?next2.val:0);
        /*
            sum = sum + (next1?next1.val:0) + (next2?next2.val:0)
                next1?next1.val:0，三目运算符：next1 非零则赋值为 next1.val 为零则赋值为0
        */
        node.next = new ListNode(sum % 10);
        node = node.next;
        next1 = next1?next1.next:null;
        next2 = next2?next2.next:null;
        sum = Math.floor(sum / 10);
    }
    return l3;
}
