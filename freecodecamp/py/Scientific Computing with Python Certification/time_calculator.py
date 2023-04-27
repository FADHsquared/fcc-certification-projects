def split_time(time: str) -> list[int]:
    return [int(time) for time in time.split(":")]


def add_time(start: str, duration: str, day_name: str | None = None) -> str:
    [time, meridiem] = start.split()
    [hours, minutes] = split_time(time)

    if meridiem == "PM" and hours < 12:
        hours_24h = hours + 12
    elif meridiem == "AM" and hours == 12:
        hours_24h = hours - 12
    else:
        hours_24h = hours

    [hours_to_add, minutes_to_add] = split_time(duration)

    new_time_in_mins = (hours_24h + hours_to_add) * 60 + (minutes + minutes_to_add)

    new_days = int(new_time_in_mins / 1440)
    new_hours = int((new_time_in_mins - (new_days * 1440)) / 60)
    new_minutes = int((new_time_in_mins - (new_days * 1440)) - (new_hours * 60))

    if new_hours == 0:
        new_hours_24h = 12
    elif new_hours > 12:
        new_hours_24h = new_hours - 12
    else:
        new_hours_24h = new_hours
    new_meridiem = "PM" if new_hours > 11 else "AM"

    if new_days > 1:
        day_delta_description = f" ({new_days} days later)"
    elif new_days == 1:
        day_delta_description = " (next day)"
    else:
        day_delta_description = ""

    day_names = (
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    )
    day_name_index = (
        day_names.index(day_name.capitalize()) if day_name is not None else -1
    )
    new_day_name = (
        ""
        if day_name_index == -1
        else f", {day_names[(day_name_index + new_days) % len(day_names)]}"
    )

    return f"{new_hours_24h}:{new_minutes:02} {new_meridiem}{new_day_name}{day_delta_description}"


def main():
    print(add_time("3:00 PM", "3:10"))
    print(add_time("11:30 AM", "2:32", "Monday"))
    print(add_time("11:43 AM", "00:20"))
    print(add_time("10:10 PM", "3:30"))
    print(add_time("11:43 PM", "24:20", "tueSday"))
    print(add_time("6:30 PM", "205:12"))


if __name__ == "__main__":
    main()
