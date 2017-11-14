class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) { [] }
    fill_cups
  end
  
  def fill_cups
    @cups.each_with_index do |arr, idx|
      @cups[idx] += [:stone, :stone, :stone, :stone] unless idx == 6 || idx == 13
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(1,14)
  end

  def make_move(start_pos, current_player_name)
    i = start_pos
    until @cups[start_pos].empty?
      i += 1
      i = 0 if i == 14
      if current_player_name == @name1
        @cups[i] << @cups[start_pos].pop unless i == 13
      else 
        @cups[i] << @cups[start_pos].pop unless i == 6
      end 
    end 
    
    render
    next_turn(i)
    if end_on_players_points_cup?(current_player_name, i)
      :prompt
    elsif @cups[i].length == 1 
      :switch
    elsif @cups[i].length > 1
      i 
    end
  end
  
  def end_on_players_points_cup?(name, i)
    (name == @name1) && (i == 6) || (name == @name2) && (i == 13)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all? { |cup| cup.empty? } || @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    if @cups[6].length == @cups[13].length
      :draw
    elsif @cups[6].length > @cups[13].length
      @name1
    else 
      @name2
    end
  end
end
