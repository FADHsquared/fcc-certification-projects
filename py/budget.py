from __future__ import annotations
from typing import TypedDict
from decimal import Decimal


class CashOperation(TypedDict):
    amount: Decimal
    description: str


class Category:
    ledger: list[CashOperation] = []
    name: str

    def __init__(self, name: str):
        self.name = name

    def __str__(self):
        return f"{self.name}: {self.ledger}"

    def deposit(self, amount: float, description: str) -> None:
        self.ledger.append({"amount": Decimal(str(amount)), "description": description})

    def withdraw(self, amount: float, description: str) -> bool:
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
    pass


def main():
    new_cat = Category("Food")
    new_cat.deposit(69.69, "initial deposit")
    new_cat.deposit(619.69, "initial deposit")
    print(new_cat)


if __name__ == "__main__":
    main()
