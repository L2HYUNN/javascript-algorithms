const packageJson = {
  name: "my-package",
  version: "1.0.0",
  dependencies: {
    foo: "^1.2.0",
  },
};

async function fetchVersions(packageName) {
  const versionsMap = {
    foo: ["1.0.0", "1.1.0", "1.2.1"],
    bar: ["1.3.0", "1.3.2", "1.4.0"],
    baz: ["10.1.0", "11.0.20"],
    qux: ["3.1.3", "3.2.0"],
    corge: ["17.1.4"],
    thud: ["4.50.1"],
  };

  return versionsMap[packageName] || [];
}

async function fetchPackageJson(packageName, version) {
  const packageJsonMap = {
    "foo@1.2.1": {
      name: "foo",
      version: "1.2.1",
      dependencies: {
        bar: "^1.3.0",
        baz: "^10.1.0",
      },
    },
    "bar@1.3.2": {
      name: "bar",
      version: "1.3.2",
      dependencies: {
        corge: "^17.1.4",
      },
    },
    "baz@10.1.0": {
      name: "baz",
      version: "10.1.0",
      dependencies: {},
    },
    "baz@11.0.20": {
      name: "baz",
      version: "11.0.20",
      dependencies: {},
    },
    "qux@3.1.3": {
      name: "qux",
      version: "3.1.3",
      dependencies: {
        thud: "^4.50.1",
      },
    },
    "corge@17.1.4": {
      name: "corge",
      version: "17.1.4",
      dependencies: {},
    },
    "thud@4.50.1": {
      name: "thud",
      version: "4.50.1",
      dependencies: {},
    },
  };

  return (
    packageJsonMap[`${packageName}@${version}`] || {
      name: packageName,
      version,
      dependencies: {},
    }
  );
}

async function solution(packageJson, fetchVersions, fetchPackageJson) {
  const target = packageJson.dependencies["foo"];
  console.log(target);
  const versions = await fetchVersions("foo");
  console.log(versions);
}

solution(packageJson, fetchVersions, fetchPackageJson);

const result = [
  "bar@1.3.2",
  "baz@10.1.0",
  "baz@11.0.20",
  "corge@17.1.4",
  "foo@1.2.1",
  "qux@3.1.3",
  "thud@4.50.1",
];
