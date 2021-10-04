def add_time(start, duration):
    [time, duration_marker] = start.split()
    [time_hours, time_minutes] = time.split(':')
    
    time_hours_in_minutes = int(time_hours) * 60
    time_total_start = time_hours_in_minutes + int(time_minutes)

    [adder_time_hours, adder_time_minutes] = time.split(':')
    adder_time_hours_in_minutes = int(adder_time_hours) * 60
    adder_time_total = adder_time_hours_in_minutes + int(adder_time_minutes)

    new_time_in_minutes = time_total_start + adder_time_total


    return new_time