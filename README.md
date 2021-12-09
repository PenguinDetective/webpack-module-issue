# Introduction
This imaginary repo is made to analyze the [#11277 Github Issue](https://github.com/webpack/webpack/issues/11277).

In this repo, you have the main react application `my-app` and a component library `my-lib`, which for now only has a `<Button>` component.
The component library is used inside `my-app`.

# Setup

1. Run `yarn install` in both directories, `/my-lib/` and `/my-app/`.
2. Inside `/my-lib/`, run `yarn link` to create a symlink.
3. Then run inside `/my-app/` the `yarn link @my-lib/apple` command to add the symlink to the my-app

# How to
Now that everything is setup, we can see both scenarios where one succeeds and one fails.

### Production
Bundle `my-lib` once, with running `yarn build` once inside its directory. The `my-lib/lib` should have updated files.
Now, run `yarn start` inside the `my-app` directory and you should see that the button is correctly imported without any webpack issue.

It is now also possible to repeatedly run `yarn build` inside `my-lib` and the react application should auto reload with the changes.

### Development
Bundle `my-lib` once, with running `yarn dev` once inside its directory (You may optionally add the `-w` flag ). The `my-lib/lib` should have updated files.
Now, run `yarn start` inside the `my-app` directory and you should see that an error starting with `TypeError: __webpack_modules__[moduleId] is not a function`.