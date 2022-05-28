import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent{
  game: string = '';
  person: Person = {
    name: '',
    favorites: [
      { id: 1, name: 'Metal Slug' },
      { id: 2, name: 'Super mario bros' },
    ]
  }

  save(): any {

  }

  removeFavorite(index: number): void {
    this.person.favorites.splice(index, 1);
  }

  addFavorite(): void {
    if(this.game.trim().length > 0){
      this.person.favorites.push({ id: this.person.favorites.length + 1, name: this.game });
      this.game = '';
    }
  }

}
