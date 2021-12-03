from decimal import Decimal


def check_cash_register(price: Decimal, cash: Decimal, cid: list[tuple[str, Decimal]]):
    cid_reversed = list(reversed(cid))

    money_map = {
        "PENNY": Decimal("0.01"),
        "NICKEL": Decimal("0.05"),
        "DIME": Decimal("0.10"),
        "QUARTER": Decimal("0.25"),
        "ONE": Decimal("1.00"),
        "FIVE": Decimal("5.00"),
        "TEN": Decimal("10.00"),
        "TWENTY": Decimal("20.00"),
        "ONE HUNDRED": Decimal("100.00"),
    }

    change = cash - price

    def change_list_map_fn(money: tuple[int, tuple[str, Decimal]]):
        nonlocal change
        (idx, (unit, amount)) = money

        if change < money_map[unit]:
            return (unit, Decimal("0.00"))

        amount_to_subtract = min(change // money_map[unit] * money_map[unit], amount)

        change -= amount_to_subtract
        cid_reversed[idx] = (unit, amount - amount_to_subtract)

        return (unit, amount_to_subtract)

    change_list = list(map(change_list_map_fn, enumerate(cid_reversed)))

    drawer_has_money = any(
        amount > 0 for amount in map(lambda money: money[1], cid_reversed)
    )

    status = (
        "INSUFFICIENT_FUNDS" if change > 0 else "OPEN" if drawer_has_money else "CLOSED"
    )

    return {
        "status": status,
        "change": []
        if status == "INSUFFICIENT_FUNDS"
        else list(reversed(change_list))
        if status == "CLOSED"
        else list(filter(lambda money: money[1] > 0, change_list)),
    }


def main():
    print(
        check_cash_register(
            Decimal(19.5),
            Decimal(20),
            [
                ("PENNY", Decimal(0.5)),
                ("NICKEL", Decimal(0)),
                ("DIME", Decimal(0)),
                ("QUARTER", Decimal(0)),
                ("ONE", Decimal(0)),
                ("FIVE", Decimal(0)),
                ("TEN", Decimal(0)),
                ("TWENTY", Decimal(0)),
                ("ONE HUNDRED", Decimal(0)),
            ],
        )
    )


if __name__ == "__main__":
    main()
