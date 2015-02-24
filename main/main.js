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

// Create an input manager for this room.
/* The input manager calls any active sprite in the
 * active_sprites array's click(); function. */
input_manager = new Sprite();
input_manager.onMouseDown = function() {
	// For each active sprite in room...  
	for(var sprite in active_sprites){
		sprite = active_sprites[sprite];
		// If we are clicking on that sprite...
		if(checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
			// Do that sprites on click function...
			sprite.click();
			break;
		}
	}
}

// Create room manager
/* The Room manager is a sprite handler that 
 * maintains which room is to be drawn and when */
var room_manager = new Sprite();
	// curr_room shall point at the corresponding room sprite
	room_manager.curr_room;
	
// Create room object
/* A room sprite should contain the elements necessary to
 * be saved for that room's purpose, as a room sprite is
 * a collection of static methods and variables. */
var Room_00 = new Sprite();

	// Create this room
	/* A room's create() method is to be called in order
	 * to initialize any of the room's needed objects. */
	Room_00.create = function() {
		
		// Initialize room sprites
		/* Sprite objects can contain static methods that
		* invoke their specific action. In these cases
		* the sprite objects are buttons with an onDown() 
		* method that is to be called on action. */
		Room_00.button_next = new Sprite();
		Room_00.button_next.width  = 150;
		Room_00.button_next.height = 90;
		Room_00.button_next.x = 930;
		Room_00.button_next.y = 630;
		Room_00.button_next.image  = Textures.load("./Common/Textures Demo/Next.png");
		Room_00.button_next.click = function() { changeRoom(Room_01); }
			
		Room_00.button_on = new Sprite();
		Room_00.button_on.width  = 150;
		Room_00.button_on.height = 90;
		Room_00.button_on.image  = Textures.load("./Common/Textures Demo/On.png");

		Room_00.button_off = new Sprite();
		Room_00.button_off.width  = 150;
		Room_00.button_off.height = 90;
		Room_00.button_off.image  = Textures.load("./Common/Textures Demo/Off.png");

		
		// Add to the world the sprites necessary
		world.addChild(Room_00.button_next);
		
		// Push active sprites onto array
		active_sprites.push(Room_00.button_next);
	}
	
	// Clear this room
	/* A room's clear() method is to be called when
	/* the game switches rooms. Listeners and sprites to be
	/* removed from the world are removed here. */
	Room_00.clear = function() {
		world.removeChild(Room_00.button_next);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
var Room_01 = new Sprite();

	// Create this room
	Room_01.create = function() {
		
		// Initialize room sprites
		Room_01.button_next = new Sprite();
		Room_01.button_next.width  = 150;
		Room_01.button_next.height = 90;
		Room_01.button_next.x = 930;
		Room_01.button_next.y = 630;
		Room_01.button_next.image  = Textures.load("./Common/Textures Demo/Next.png");
		Room_01.button_next.click = function() { changeRoom(Room_02); }

		Room_01.button_prev = new Sprite();
		Room_01.button_prev.width  = 150;
		Room_01.button_prev.height = 90;
		Room_01.button_prev.x = 0;
		Room_01.button_prev.y = 630;
		Room_01.button_prev.image  = Textures.load("./Common/Textures Demo/Previous.png");
		Room_01.button_prev.click = function() { changeRoom(Room_00); }

		// Add to the world the sprites necessary
		world.addChild(Room_01.button_next);
		world.addChild(Room_01.button_prev);
		
		// Push active sprites onto the array
		active_sprites.push(Room_01.button_next);
		active_sprites.push(Room_01.button_prev);
	}
	
	// Clear this room
	Room_01.clear = function() {
		world.remove(Room_01.button_next);
		world.remove(Room_01.button_prev);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}
	
var Room_02 = new Sprite();

	// Create this room
	Room_02.create = function() {
		
		// Initialize room sprites
		Room_02.button_next = new Sprite();
		Room_02.button_next.width  = 150;
		Room_02.button_next.height = 90;
		Room_02.button_next.x = 930;
		Room_02.button_next.y = 630;
		Room_02.button_next.image  = Textures.load("./Common/Textures Demo/Next.png");
		Room_02.button_next.click = function() { changeRoom(Room_03); }

		Room_02.button_prev = new Sprite();
		Room_02.button_prev.width  = 150;
		Room_02.button_prev.height = 90;
		Room_02.button_prev.x = 0;
		Room_02.button_prev.y = 630;
		Room_02.button_prev.image  = Textures.load("./Common/Textures Demo/Previous.png");
		Room_02.button_prev.click = function() { changeRoom(Room_01); }

		// Add to the world the sprites necessary
		world.addChild(Room_02.button_next);
		world.addChild(Room_02.button_prev);
		
		// Push active sprites onto the array
		active_sprites.push(Room_02.button_next);
		active_sprites.push(Room_02.button_prev);
	}
	
	// Clear this room
	Room_02.clear = function() {
		world.remove(Room_02.button_next);
		world.remove(Room_02.button_prev);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}

var Room_03 = new Sprite();

	// Create this room
	Room_03.create = function() {
		
		// Initialize room sprites
		Room_03.button_prev = new Sprite();
		Room_03.button_prev.width  = 150;
		Room_03.button_prev.height = 90;
		Room_03.button_prev.x = 0;
		Room_03.button_prev.y = 630;
		Room_03.button_prev.image  = Textures.load("./Common/Textures Demo/Previous.png");
		Room_03.button_prev.click = function() { changeRoom(Room_02); }

		// Add to the world the sprites necessary
		world.addChild(Room_03.button_prev);
		
		// Push active sprites onto the array
		active_sprites.push(Room_03.button_prev);
	}
	
	// Clear this room
	Room_03.clear = function() {
		world.remove(Room_03.button_prev);
		while(active_sprites.length > 0)
			active_sprites.pop();
	}

// Initialize Brine's world
/* These are the only necessary objects needed
   to begin the game. */
world.addChild(room_manager);
world.addChild(input_manager);

room_manager.curr_room = Room_00;
room_manager.curr_room.create();

// Event listeners to be used in the game always
gInput.addMouseDownListener(input_manager);

// Game functions
/* Global game functions that mostly deal with changing rooms,
 * and whatever listeners are necessary. */
// Changes rooms
function changeRoom(room) {
	room_manager.curr_room.clear();
	room_manager.curr_room = room;
	room_manager.curr_room.create();
}

// Returns true if the mouse is over a sprite.
function checkSprite(sprite, x, y){
  var min_x = sprite.x;
  var max_x = sprite.x + sprite.width;
  var min_y = sprite.y;
  var max_y = sprite.y + sprite.height;
  var mx = x;
  var my = y;
  
  if(mx >= min_x && mx <= max_x && my >= min_y && my <= max_y){
    return true;
  }
  return false;
}








