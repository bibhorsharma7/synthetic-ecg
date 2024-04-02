# Models

from math import atan2, exp, pi, sqrt

import numpy as np
from scipy.integrate import odeint

DEFAULT_PARAMS = {"time": 1, "iv": [-1, 0, 0]}


def mc_sharry_ode_model(iv, time):
    # Constants
    omega = 2 * pi  # frequency
    z0 = 0  # z0 paramter

    # paramters for [P,Q,R,S,T] sections of the signal
    a = [1.2, -5, 30, -7.5, 0.75]  # parameter a
    b = [0.25, 0.1, 0.1, 0.1, 0.4]  # parameter b
    th = [-pi / 3, -pi / 12, 0, pi / 12, pi / 2]  # theta parameter

    # initial values for x,y,z
    x = iv[0]
    y = iv[1]
    z = iv[2]

    alpha = 1 - sqrt(x**2 + y**2)
    theta = atan2(y, x)

    dxdt = alpha * x - omega * y
    dydt = alpha * y + omega * x

    dzdt = -(z - z0)
    for i in range(5):
        dzdt = dzdt - (
            a[i] * (theta - th[i]) * exp(-((theta - th[i]) ** 2) / (2 * b[i] ** 2))
        )

    return [dxdt, dydt, dzdt]


def solve(params=DEFAULT_PARAMS):
    num = params["time"] * 500
    t, steps = np.linspace(0, params["time"], num, retstep=True)
    iv = params["iv"]
    x = odeint(mc_sharry_ode_model, iv, t)
    z = x[:, 2]

    # plt.plot(t, z)


if __name__ == "__main__":
    solve()
