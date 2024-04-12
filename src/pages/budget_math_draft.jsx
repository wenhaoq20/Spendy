class BudgetTracker:
    def __init__(self, initial_balance=0): //Starting balance is 0 by default, also having a balance attribute
        self.balance = initial_balance
        self.expenses = {}

    def add_expense(self, category, amount): 
        if category not in self.expenses:
            self.expenses[category] = []
        self.expenses[category].append(amount)
        self.balance -= amount

    def add_income(self, amount):
        self.balance += amount

    def get_total_balance(self):
        return self.balance

    def get_category_total(self, category):
        if category in self.expenses:
            return sum(self.expenses[category])
        return 0

    def view_expenses(self):
        for category, expenses in self.expenses.items():
            print(f"{category}: {sum(expenses)}")

# Example usage:
budget_tracker = BudgetTracker(1000)

budget_tracker.add_expense('Food', 50)
budget_tracker.add_expense('Food', 30)
budget_tracker.add_expense('Transport', 40)

budget_tracker.add_income(500)

total_balance = budget_tracker.get_total_balance()
print(f"Total balance: {total_balance}")

food_expenses = budget_tracker.get_category_total('Food')
print(f"Total food expenses: {food_expenses}")

transport_expenses = budget_tracker.get_category_total('Transport')
print(f"Total transport expenses: {transport_expenses}")

budget_tracker.view_expenses()
