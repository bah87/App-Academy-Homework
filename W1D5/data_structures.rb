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

class Map 
  attr_reader :map 
  
  def initialize(map=[])
    @map = map
  end 
  
  def assign(key, value)
    pos = position(key)
    if pos.nil?
      @map << [key, value]
    else 
      @map[pos].last = value
    end 
  end
  
  def position(key)
    @map.each_with_index do |arr, idx|
      return idx if arr.first == key 
    end 
    
    nil
  end
  
  def lookup(key)
    @map.each do |arr|
      return arr.last if arr.first == key
    end 
    
    puts "#{key} does not exist in the map."
  end
  
  def remove(key)
    pos = position(key)
    @map.delete_at(pos) unless pos.nil?
  end
  
  def show
    @map.inspect
  end
end