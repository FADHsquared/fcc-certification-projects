from re import split as re_split


def arithmetic_arranger(problems: list[str], show_answer: bool = False) -> str:
    for problem in [problem.replace(" ", "") for problem in problems]:
        [number1, operator, number2] = re_split(r"([*/+-])", problem)

        format_len = max(len(number1), len(number2)) + 2
        formatted_problem = f"""{number1:>{format_len}}
{operator}{number2:>{format_len - 1}}
{ '-' * format_len}"""
        
        answer_map = {
            "*": lambda x, y: x * y,
            "/": lambda x, y: x / y,
            "+": lambda x, y: x + y,
            "-": lambda x, y: x - y
        }
        answer = answer_map[operator](number1, number2)

        print(f"{formatted_problem}" if show_answer else formatted_problem)

    return "KEKW test"


def main():
    print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))


if __name__ == "__main__":
    main()
