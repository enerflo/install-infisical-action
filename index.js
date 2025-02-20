import core from "@actions/core";
import exec from "@actions/exec";

async function install() {
  try {
    const method = core.getInput("method", { required: true });
    const version = core.getInput("version");

    switch (method) {
      case "npm":
        return install_npm(version);
      case "ubuntu":
        return install_ubuntu(version);
    }
  } catch (e) {
    core.setFailed(e.message);
  }
}

async function install_npm(version) {
  let command = "npm install -g @infisical/cli";
  if (version) {
    command += `@${version}`;
  }

  await exec.exec(command);
}

async function install_ubuntu(version) {
  await exec.exec("curl -1sLf https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh -o /tmp/infisical-setup.deb.sh");
  await exec.exec("sudo bash /tmp/infisical-setup.deb.sh");
  await exec.exec("sudo apt update");

  if (version) {
    await exec.exec(`sudo apt install -y "infisical=${version}"`);
  } else {
    await exec.exec("sudo apt install -y infisical");
  }
}

await install();
