import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

@Component({
    selector: 'app',
    template: `

    <div class="media">
     <img class="media__figure image" src="./dist/images/the-grapes-of-wrath.jpg" alt="Kitten">
     <div class="media__body">
       <h3 class="media__title">The Grapes of Wrath</h3>
       <div class="media__subtitle">by John Steinbeck</div>
       <p class="media__description">
        An epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads.
      </div>
    </div>

			<ul>
				<li 
					*ngFor="#shoppingListItem of shoppingListItems"
					(click)="onItemClicked(shoppingListItem)"
					>
					{{ shoppingListItem.name }}
				</li>
			</ul>
			<input type="text" 
				[(ngModel)]="selectedItem.name"
			/>
			<input type="text" 
				#shoppingListItem
			/>
			<button 
				(click)="onAddItem(shoppingListItem)"
			>Add Item</button>
			<button 
				(click)="onDeleteItem()"
			>Delete Item</button>
	`,
	// directives: [ShoppingListComponent]
})
export class AppComponent {
	public shoppingListItems = [
		{ name: "Apple" }, 
		{ name: "Orange" },
		{ name: "Cheese" }
	];

	public selectedItem = { name: "" };

	onItemClicked( shoppingListItem ) {
		this.selectedItem = shoppingListItem;
	}

	onAddItem(shoppingListItem) {
		this.shoppingListItems.push({ name: shoppingListItem.value });
	}	

	onDeleteItem() {
		this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
	}

}