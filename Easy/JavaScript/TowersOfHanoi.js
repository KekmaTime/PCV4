function MoveTower(disk, source, destination, spare) {
    if (disk == 0) {
      console.log("Disk moved from " + source + " to " + destination);
    } else {
      MoveTower(disk - 1, source, spare, destination);
      console.log("Disk moved from " + source + " to " + destination);
      MoveTower(disk - 1, spare, destination, source);
    }
  }
  
  MoveTower(3, "A", "C", "B");  