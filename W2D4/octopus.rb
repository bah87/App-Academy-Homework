fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(arr)
  longest = []
  arr.each do |el1|
    longest << el1
    arr.each do |el2|
      if el1.length < el2.length
        longest.pop
        next
      end
    end
  end  
  
  longest.first
end
puts sluggish_octopus(fish) == "fiiiissshhhhhh"

def dominant_octopus(arr)
  arr.merge_sort.last
end

class Array
  def merge_sort(&prc)
    return self if self.length <= 1
    prc ||= Proc.new { |x, y| x <=> y }
    mid = self.length / 2
    left = self.take(mid)
    right = self.drop(mid)
    sorted_left = left.merge_sort(&prc)
    sorted_right = right.merge_sort(&prc)
    self.class.merge(sorted_left, sorted_right, &prc)
  end
  
  def self.merge(left, right, &prc)
    merged = []
    until left.empty? || right.empty?
      if prc.call(left.first.length, right.first.length) == -1
        merged << left.shift
      else 
        merged << right.shift 
      end 
    end 
    
    merged + left + right
  end
end
puts dominant_octopus(fish) == "fiiiissshhhhhh"

def clever_octopus(arr)
  longest = arr.first
  arr.drop(1).each do |el|
    longest = el if el.length > longest.length
  end
  
  longest
end
puts clever_octopus(fish) == "fiiiissshhhhhh"

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
def slow_dance(direction, arr)
  arr.each_with_index do |el, idx|
    return idx if el == direction
  end 
  puts "#{direction} does not exist in array provided."
end 
puts slow_dance("up", tiles_array) == 0
puts slow_dance("right-down", tiles_array) == 3

tiles_hash = tiles_array.map.with_index { |dir, idx| [dir, idx] }.to_h
def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
puts fast_dance("up", tiles_hash) == 0
puts fast_dance("right-down", tiles_hash) == 3
