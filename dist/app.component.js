System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.shoppingListItems = [
                        { name: "Apple" },
                        { name: "Orange" },
                        { name: "Cheese" }
                    ];
                    this.selectedItem = { name: "" };
                }
                AppComponent.prototype.onItemClicked = function (shoppingListItem) {
                    this.selectedItem = shoppingListItem;
                };
                AppComponent.prototype.onAddItem = function (shoppingListItem) {
                    this.shoppingListItems.push({ name: shoppingListItem.value });
                };
                AppComponent.prototype.onDeleteItem = function () {
                    this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\t\t\t<ul>\n\t\t\t\t<li \n\t\t\t\t\t*ngFor=\"#shoppingListItem of shoppingListItems\"\n\t\t\t\t\t(click)=\"onItemClicked(shoppingListItem)\"\n\t\t\t\t\t>\n\t\t\t\t\t{{ shoppingListItem.name }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<input type=\"text\" \n\t\t\t\t[(ngModel)]=\"selectedItem.name\"\n\t\t\t/>\n\t\t\t<input type=\"text\" \n\t\t\t\t#shoppingListItem\n\t\t\t/>\n\t\t\t<button \n\t\t\t\t(click)=\"onAddItem(shoppingListItem)\"\n\t\t\t>Add Item</button>\n\t\t\t<button \n\t\t\t\t(click)=\"onDeleteItem()\"\n\t\t\t>Delete Item</button>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7b0JBQ1Esc0JBQWlCLEdBQUc7d0JBQzFCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTt3QkFDakIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNsQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7cUJBQ2xCLENBQUM7b0JBRUssaUJBQVksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFjcEMsQ0FBQztnQkFaQSxvQ0FBYSxHQUFiLFVBQWUsZ0JBQWdCO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO2dCQUN0QyxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxnQkFBZ0I7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRCxtQ0FBWSxHQUFaO29CQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLENBQUM7Z0JBN0NGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLG9pQkFxQlo7cUJBRUQsQ0FBQzs7Z0NBQUE7Z0JBc0JGLG1CQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCx1Q0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaG9wcGluZ0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3Nob3BwaW5nLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaSBcblx0XHRcdFx0XHQqbmdGb3I9XCIjc2hvcHBpbmdMaXN0SXRlbSBvZiBzaG9wcGluZ0xpc3RJdGVtc1wiXG5cdFx0XHRcdFx0KGNsaWNrKT1cIm9uSXRlbUNsaWNrZWQoc2hvcHBpbmdMaXN0SXRlbSlcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHR7eyBzaG9wcGluZ0xpc3RJdGVtLm5hbWUgfX1cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBcblx0XHRcdFx0WyhuZ01vZGVsKV09XCJzZWxlY3RlZEl0ZW0ubmFtZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdCNzaG9wcGluZ0xpc3RJdGVtXG5cdFx0XHQvPlxuXHRcdFx0PGJ1dHRvbiBcblx0XHRcdFx0KGNsaWNrKT1cIm9uQWRkSXRlbShzaG9wcGluZ0xpc3RJdGVtKVwiXG5cdFx0XHQ+QWRkIEl0ZW08L2J1dHRvbj5cblx0XHRcdDxidXR0b24gXG5cdFx0XHRcdChjbGljayk9XCJvbkRlbGV0ZUl0ZW0oKVwiXG5cdFx0XHQ+RGVsZXRlIEl0ZW08L2J1dHRvbj5cblx0YCxcblx0Ly8gZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cHVibGljIHNob3BwaW5nTGlzdEl0ZW1zID0gW1xuXHRcdHsgbmFtZTogXCJBcHBsZVwiIH0sIFxuXHRcdHsgbmFtZTogXCJPcmFuZ2VcIiB9LFxuXHRcdHsgbmFtZTogXCJDaGVlc2VcIiB9XG5cdF07XG5cblx0cHVibGljIHNlbGVjdGVkSXRlbSA9IHsgbmFtZTogXCJcIiB9O1xuXG5cdG9uSXRlbUNsaWNrZWQoIHNob3BwaW5nTGlzdEl0ZW0gKSB7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBzaG9wcGluZ0xpc3RJdGVtO1xuXHR9XG5cblx0b25BZGRJdGVtKHNob3BwaW5nTGlzdEl0ZW0pIHtcblx0XHR0aGlzLnNob3BwaW5nTGlzdEl0ZW1zLnB1c2goeyBuYW1lOiBzaG9wcGluZ0xpc3RJdGVtLnZhbHVlIH0pO1xuXHR9XHRcblxuXHRvbkRlbGV0ZUl0ZW0oKSB7XG5cdFx0dGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5zcGxpY2UodGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKSwgMSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
