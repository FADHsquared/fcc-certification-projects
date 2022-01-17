from __future__ import annotations
from random import sample


class Hat:
    def __init__(self, **kwargs: int):
        self.contents: list[str] = []

        for key, value in kwargs.items():
            self.contents.extend([key] * value)

    def draw(self, draw_count: int):
        drawns = (
            sample(self.contents, draw_count)
            if draw_count < len(self.contents)
            else self.contents
        )

        for drawn in drawns:
            self.contents.remove(drawn)

        return drawns


def experiment(
    hat: Hat, expected_balls: dict[str, int], num_balls_drawn: int, num_experiments: int
):
    pass


def main():
    hat1 = Hat(yellow=3, blue=2, green=6)
    print(hat1)


if __name__ == "__main__":
    main()
