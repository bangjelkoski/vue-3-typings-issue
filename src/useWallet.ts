import { reactive } from "vue";

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

interface State {
  person: Person;
}

const initialState = {
  person: new Person("Vue3")
} as State;

const state = reactive<State>(initialState);

export default function usePrice() {
  function logPerson(person: Person): void {
    return console.log(person.getName());
  }

  function onLog() {
    const { person } = state;

    console.log(logPerson(person));
  }

  return {
    state,
    logPerson,
    onLog
  };
}
