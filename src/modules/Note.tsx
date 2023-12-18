
class Note {
    id: number;
    title: string;
    description: string;
    important: boolean = false;
  
    constructor(id: number, title: string, description: string, important: boolean = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.important = important;
    }
  }

export default Note;
  