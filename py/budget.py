from __future__ import annotations
from typing import TypedDict
from decimal import Decimal


class CashOperation(TypedDict):
    amount: float
    description: str


class CategorySpending(TypedDict):
    name: str
    total_spent: float


class Category:
    def __init__(self, name: str):
        self.name = name
        self.ledger: list[CashOperation] = []

    def __str__(self):
        header = f"{self.name:*^30}"

        entries = map(
            lambda entry: f"{entry['description']:23.23}{entry['amount']:7.2f}",
            self.ledger,
        )

        footer = f"Total: {self.get_balance():.2f}"

        return "\n".join((header, *entries, footer))

    def deposit(self, amount: float, description: str = "") -> None:
        self.ledger.append(
            {"amount": float(Decimal(str(amount))), "description": description}
        )

    def withdraw(self, amount: float, description: str = "") -> bool:
        if self.check_funds(amount):
            self.deposit(0 - amount, description)
            return True
        return False

    def get_balance(self) -> float:
        return float(sum(cash_operation["amount"] for cash_operation in self.ledger))

    def transfer(self, amount: float, category: Category) -> bool:
        if self.withdraw(amount, f"Transfer to {category.name}"):
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount: float) -> bool:
        return Decimal(str(amount)) <= Decimal(str(self.get_balance()))


def create_spend_chart(categories: list[Category]):
    category_spendings: list[CategorySpending] = []
    for category in categories:
        category_spendings.append({
            "name": category.name,
            "total_spent": abs(sum(entry["amount"] for entry in category.ledger if entry["amount"] < 0))
        })

    aggregate_spending = sum(spending["total_spent"] for spending in category_spendings)

    header = "Percentage spent by category"

    chart_body_rows: list[str] = []
    for percentage in range(100, -1, -10):
        chart_body_rows.append(
            f"{percentage:3}| {'  '.join('o' if (spending['total_spent'] / aggregate_spending * 100) >= percentage else ' ' for spending in category_spendings)}  "
        )

    limiter = f"    {'---' * len(category_spendings)}-"

    caption_rows: list[str] = []
    for idx in range(max(len(spending["name"]) for spending in category_spendings)):
        caption_rows.append(
            f"     {'  '.join(spending['name'][idx] if len(spending['name']) > idx else ' ' for spending in category_spendings)}  "
        )

    return "\n".join((header, *chart_body_rows, limiter, *caption_rows))


def main():
    food = Category("Food")
    entertainment = Category("Entertainment")
    business = Category("Business")

    food.deposit(900, "deposit")
    entertainment.deposit(900, "deposit")
    business.deposit(900, "deposit")

    food.withdraw(105.55)
    entertainment.withdraw(33.40)
    business.withdraw(10.99)

    print(create_spend_chart([business, food, entertainment]))


if __name__ == "__main__":
    main()
