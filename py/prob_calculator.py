from __future__ import annotations
import random
from copy import copy, deepcopy
from collections import Counter


class Hat:
    def __init__(self, **kwargs: int) -> None:
        self.contents: list[str] = []

        for key, value in kwargs.items():
            self.contents.extend([key] * value)

    def draw(self, draw_count: int) -> list[str]:
        drawns = (
            random.sample(self.contents, draw_count)
            if draw_count < len(self.contents)
            else copy(self.contents)
        )

        for drawn in drawns:
            self.contents.remove(drawn)

        return drawns


def experiment(
    hat: Hat, expected_balls: dict[str, int], num_balls_drawn: int, num_experiments: int
) -> float:
    success_count = 0
    for _ in range(num_experiments):
        hat_copy = deepcopy(hat)

        counter = Counter(hat_copy.draw(num_balls_drawn))
        success = True

        for key, value in expected_balls.items():
            counter_value = counter.get(key)
            if counter_value is None:
                counter_value = 0

            if counter_value < value:
                success = False

        if success:
            success_count += 1

    return success_count / num_experiments


def main():
    hat = Hat(yellow=5, red=1, green=3, blue=9, test=1)
    print(
        experiment(
            hat=hat,
            expected_balls={"yellow": 2, "blue": 3, "test": 1},
            num_balls_drawn=20,
            num_experiments=1000,
        )
    )


if __name__ == "__main__":
    main()
