import { Component } from 'react';

interface User {
    name: string;
    age: number
}

interface UserSearchProps {
    users?: User[]
}

interface UserSearchState {
    name: '',
    user: User | undefined;
}

class UserSearchAsClass extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        const foundUser = this.props.users?.find((user) => {
            return user.name === this.state.name;
        });

        console.log(foundUser);
        this.setState({ user: foundUser });
    }

    render() {
        const { name, user } = this.state;
        return (
            <div>
                User Search As Class
                <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={this.onClick}>Search</button>
                Found User: {user?.name} {user?.age}
            </div>
        )
    }
}

export default UserSearchAsClass