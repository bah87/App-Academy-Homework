class Stack
  attr_reader :stack 
  
  def initialize(stack=[])
    @stack = stack
  end
  
  def add(el)
    @stack.push(el)
  end
  
  def remove 
    @stack.pop
    @stack
  end 
  
  def show
    @stack.inspect
  end
end

class Queue
  def enqueue(el)
  end 
  
  def dequeue
  end 
  
  def show
  end
end