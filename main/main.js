// Use 2D context with Brine.js
use2D = true;

// Create global textured sprites
/* Sprites here are global uniform objects that are
 * not created by rooms but are instead re-referenced
 * here whenever necessary. */
 
/*** Currently, there are none by the way ***/

// Create global sprite array
/* Within this array is the sprites to be drawn 
 * and referenced, such as during the sprite checking
 * function on global mouseDown() or whatever. */
var active_sprites = new Array();

// Create room manager
/* The Room manager is a sprite handler that 
 * maintains which room is to be drawn and when */
var room_manager = new Sprite();
	// curr_room shall point at the corresponding room sprite
	room_manager.curr_room;
	
// Create room object
/* A room sprite should contain the elements necessary to
 * be saved for that room's purpose, as a room sprite is
 * a collection of static methods and private variables. */
var Room_00 = new Sprite();
	// Initialize room sprites
	/* Sprite objects can contain static methods that
	 * invoke their specific action. In these cases
	 * the sprite objects are buttons with an onDown() 
	 * method that is to be called on action. */
	var button_next = new Sprite();
		button_next.width  = 150;
		button_next.height = 90;
		button_next.x = 930;
		button_next.y = 630;
		button_next.image  = Textures.load("./Common/Textures Demo/Next.png");

	var button_on = new Sprite();
		button_on.width  = 150;
		button_on.height = 90;
		button_on.image  = Textures.load("./Common/Textures Demo/On.png");

	var button_off = new Sprite();
		button_off.width  = 150;
		button_off.height = 90;
		button_off.image  = Textures.load("./Common/Textures Demo/Off.png");
	
	// Create this room
	/* A room's create() method is to be called in order
	 * to initialize any of the room's needed objects. */
	Room_00.create = function() {
		world.addChild(button_next);
		active_sprites.push(button_next);
		
		// Create an input manager for this room.
		/* The input manager is specific to each room
		 * and created only at the room creation time.
		 */
		Room_00.input_manager = new Sprite();
		Room_00.input_manager.onMouseDown = function() {
			alert("Hey!");
		}
		
		// Event listeners
		gInput.addMouseDownListener(Room_00.input_manager);
	}
	
	// Clear this room
	/* A room's clear() method is to be called when
	/* the game switches rooms. Listeners and sprites to be
	/* removed from the world are removed here. */
	Room_00.clear = function() {
		gInput.removeMouseDownListener(Room_00.input_manager);
		world.remove(button_next);
	}
	
var Room_01 = new Sprite();
	// Initialize room sprites
	var button_next = new Sprite();
		button_next.width  = 150;
		button_next.height = 90;
		button_next.x = 930;
		button_next.y = 630;
		button_next.image  = Textures.load("./Common/Textures Demo/Next.png");

	var button_prev = new Sprite();
		button_prev.width  = 150;
		button_prev.height = 90;
		button_prev.x = 0;
		button_prev.y = 630;
		button_prev.image  = Textures.load("./Common/Textures Demo/Previous.png");

	// Create this room
	Room_01.create = function() {
		world.addChild(button_next);
		world.addChild(button_prev);
		active_sprites.push(button_next);
		active_sprites.push(button_prev);
	}
	
	// Clear this room
	Room_01.clear = function() {
		world.remove(button_next);
		world.remove(button_prev);
	}

// Initialize Brine's world
/* These are the only necessary objects needed
   to begin the game. */
world.addChild(room_manager);
room_manager.curr_room = Room_00;
room_manager.curr_room.create();

changeRoom(Room_01);
changeRoom(Room_00);

// Game functions
/* Global game functions that mostly deal with changing rooms. */
// Changes rooms
function changeRoom(room) {
	room_manager.curr_room.clear();
	while(active_sprites.length > 0)
		active_sprites.pop();
	
	room_manager.curr_room = room;
	room_manager.curr_room.create();
}

// Returns the sprite the mouse is over
function checkSprite(sprite, x, y){
  var minX = sprite.x;
  var maxX = sprite.x+sprite.width;
  var minY = sprite.y;
  var maxY = sprite.y+sprite.height;
  var mx = x;
  var my = y;
  
  if(mx >= minX && mx <= maxX && my >= minY && my <= maxY){
    return true;
  }
  return false;
}








