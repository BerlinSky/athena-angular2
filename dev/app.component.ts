import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

@Component({
    selector: 'app',
    template: `
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