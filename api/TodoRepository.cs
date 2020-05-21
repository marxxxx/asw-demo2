using System.Collections.Generic;

public static class TodoRepository
{
    public static List<Todo> Todos { get; set; } = new List<Todo>()
    {
      new Todo() { Id = 1, Title = "Do something"}
    };
}
