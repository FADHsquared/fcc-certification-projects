from re import split as re_split, match as re_match


def append_horizontally(*strings: str, distance: int = 4):
    strings_rowsplitted = [string.split("\n") for string in strings]
    return "\n".join(f"{' ' * distance}".join(row) for row in zip(*strings_rowsplitted))


def arithmetic_arranger(problems: list[str], show_answer: bool = False) -> str:
    assert len(problems) <= 5, "Error: Too many problems."

    results_list: list[str] = []

    for problem in [problem.replace(" ", "") for problem in problems]:
        [number1, operator, number2] = re_split(r"([%*/+-])", problem)

        assert re_match(r"[+-]", operator), "Error: Operator must be '+' or '-'."
        assert re_match(r"^[0-9]+$", number1) and re_match(r"^[0-9]+$",
                                                           number2), "Error: Numbers must only contain digits."
        assert len(number1) <= 4 and len(number2) <= 4, "Error: Numbers cannot be more than four digits."

        format_len = max(len(number1), len(number2)) + 2
        formatted_problem = f"""{number1:>{format_len}}
{operator}{number2:>{format_len - 1}}
{'-' * format_len}"""

        answer_map = {
            "+": lambda x, y: int(x) + int(y),
            "-": lambda x, y: int(x) - int(y)
        }
        answer = answer_map[operator](number1, number2)

        results_list.append(f"{formatted_problem}\n{answer:>{format_len}}" if show_answer else formatted_problem)

    return append_horizontally(*results_list)


def main():
    print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))


if __name__ == "__main__":
    main()
