export const __rspack_esm_ids = [567182]
export const __webpack_modules__ = {
  NIJm(e, t, s) {
    s.d(t, { Caption: () => K, Controls: () => L, Visualization: () => A })
    var a = s("ABep"),
      r = s("on57"),
      n = s("Wf1j"),
      i = s("HOSX"),
      l = s("KwmQ"),
      o = s("pXKw"),
      d = s("pNxJ"),
      c = s("pTkA")
    let p = (e) => {
        let t = Number.isFinite(e) ? Math.round(e) : 0
        switch (t) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            return t
          default:
            return 7 * (t > 7)
        }
      },
      m = (e) => {
        let t = p(e.mutation),
          s = !!e.applied,
          a = 0 === t || 3 === t || 6 === t,
          r = s ? (a ? "accepted" : "rejected") : "proposed",
          n = [
            { id: 101, name: "ana", departmentId: 10 },
            { id: 102, name: "bo", departmentId: 20 },
            { id: 103, name: "cy", departmentId: 10 },
          ],
          i = ((e) => {
            switch (e) {
              case 0:
                return { action: "insert", target: "employee", row: { id: 104, name: "dee", departmentId: 20 } }
              case 1:
                return { action: "insert", target: "employee", row: { id: 104, name: "dee", departmentId: 99 } }
              case 2:
                return { action: "insert", target: "department", row: { id: 10, name: "ops" } }
              case 3:
                return {
                  action: "update",
                  target: "employee",
                  row: { id: 103, name: "cy", departmentId: 20 },
                  previousDepartmentId: 10,
                }
              case 4:
                return {
                  action: "update",
                  target: "employee",
                  row: { id: 102, name: "bo", departmentId: 99 },
                  previousDepartmentId: 20,
                }
              case 5:
                return { action: "update", target: "department", row: { id: 40, name: "sales" }, previousId: 10 }
              case 6:
                return { action: "insert", target: "employee", row: { id: 104, name: "dee", departmentId: null } }
              case 7:
                return { action: "insert", target: "employee", row: { id: null, name: "dee", departmentId: 20 } }
            }
          })(t)
        if ("accepted" === r && "employee" === i.target)
          if ("insert" === i.action) n.push(i.row)
          else {
            let e = n.findIndex((e) => e.id === i.row.id)
            e >= 0 && (n[e] = i.row)
          }
        let l = 0 === t || 3 === t || 7 === t ? [20] : 2 === t || 5 === t ? [10] : [],
          o = 3 === t ? [103] : 4 === t ? [102] : 5 === t ? [101, 103] : 0 === t || 1 === t || 6 === t ? [104] : [],
          d = 5 === t ? [101, 103] : []
        return {
          mutation: t,
          applied: s,
          valid: a,
          outcome: r,
          departments: [
            { id: 10, name: "sales" },
            { id: 20, name: "design" },
            { id: 30, name: "support" },
          ],
          employees: n,
          proposal: i,
          highlightedParentIds: l,
          highlightedEmployeeIds: o,
          brokenEmployeeIds: d,
        }
      },
      u = "var(--learning-block-color-companion)",
      g = "var(--learning-block-color-primary)",
      _ = "var(--text-error)",
      f = (e, t) => (null == t ? "NULL" : e.formatNumber(t, { useGrouping: !1 })),
      x = (e, t) => {
        switch (t) {
          case "sales":
            return e.formatMessage({ id: "sql_key_constraints.row.sales", defaultMessage: "Sales" })
          case "design":
            return e.formatMessage({ id: "sql_key_constraints.row.design", defaultMessage: "Design" })
          case "support":
            return e.formatMessage({ id: "sql_key_constraints.row.support", defaultMessage: "Support" })
          case "ops":
            return e.formatMessage({ id: "sql_key_constraints.row.ops", defaultMessage: "Ops" })
        }
      },
      h = (e, t) => {
        switch (t) {
          case "ana":
            return e.formatMessage({ id: "sql_key_constraints.row.ana", defaultMessage: "Ana" })
          case "bo":
            return e.formatMessage({ id: "sql_key_constraints.row.bo", defaultMessage: "Bo" })
          case "cy":
            return e.formatMessage({ id: "sql_key_constraints.row.cy", defaultMessage: "Cy" })
          case "dee":
            return e.formatMessage({ id: "sql_key_constraints.row.dee", defaultMessage: "Dee" })
        }
      },
      y = (e) => {
        switch (e) {
          case 0:
            return "INSERT INTO employee VALUES (104, 'Dee', 20);"
          case 1:
            return "INSERT INTO employee VALUES (104, 'Dee', 99);"
          case 2:
            return "INSERT INTO department VALUES (10, 'Ops');"
          case 3:
            return "UPDATE employee SET dept_id = 20 WHERE id = 103;"
          case 4:
            return "UPDATE employee SET dept_id = 99 WHERE id = 102;"
          case 5:
            return "UPDATE department SET id = 40 WHERE id = 10;"
          case 6:
            return "INSERT INTO employee VALUES (104, 'Dee', NULL);"
          case 7:
            return "INSERT INTO employee VALUES (NULL, 'Dee', 20);"
        }
      },
      k = (e, t) => {
        switch (t) {
          case "proposed":
            return e.formatMessage({ id: "sql_key_constraints.status.proposed", defaultMessage: "Proposed" })
          case "accepted":
            return e.formatMessage({ id: "sql_key_constraints.status.accepted", defaultMessage: "Accepted" })
          case "rejected":
            return e.formatMessage({ id: "sql_key_constraints.status.rejected", defaultMessage: "Rejected" })
        }
      },
      M = (e, t) => {
        let { mutation: s, outcome: a } = t
        if ("proposed" === a)
          switch (s) {
            case 0:
              return e.formatMessage({
                id: "sql_key_constraints.caption.insert_valid_proposed",
                defaultMessage: "PK 104 is new; FK 20 matches an existing department",
              })
            case 1:
              return e.formatMessage({
                id: "sql_key_constraints.caption.insert_missing_proposed",
                defaultMessage: "FK 99 has no matching department",
              })
            case 2:
              return e.formatMessage({
                id: "sql_key_constraints.caption.duplicate_proposed",
                defaultMessage: "PK 10 already belongs to an existing department",
              })
            case 3:
              return e.formatMessage({
                id: "sql_key_constraints.caption.update_valid_proposed",
                defaultMessage: "Employee 103 can change its FK from 10 to the existing PK 20",
              })
            case 4:
              return e.formatMessage({
                id: "sql_key_constraints.caption.update_missing_proposed",
                defaultMessage: "Employee 102 cannot change its FK to the missing PK 99",
              })
            case 5:
              return e.formatMessage({
                id: "sql_key_constraints.caption.parent_update_proposed",
                defaultMessage: "Employees 101 and 103 still reference PK 10",
              })
            case 6:
              return e.formatMessage({
                id: "sql_key_constraints.caption.null_fk_proposed",
                defaultMessage: "A nullable FK may be NULL; it creates no parent reference",
              })
            case 7:
              return e.formatMessage({
                id: "sql_key_constraints.caption.null_pk_proposed",
                defaultMessage: "A primary key cannot be NULL",
              })
          }
        if ("accepted" === a)
          switch (s) {
            case 0:
              return e.formatMessage({
                id: "sql_key_constraints.caption.insert_valid_accepted",
                defaultMessage: "Accepted: employees 102 and 104 now share the valid FK 20",
              })
            case 3:
              return e.formatMessage({
                id: "sql_key_constraints.caption.update_valid_accepted",
                defaultMessage: "Accepted: employee 103 now references department 20",
              })
            case 6:
              return e.formatMessage({
                id: "sql_key_constraints.caption.null_fk_accepted",
                defaultMessage: "Accepted: employee 104 has no department reference",
              })
            default:
              return e.formatMessage({
                id: "sql_key_constraints.caption.accepted",
                defaultMessage: "Accepted: all key constraints remain valid",
              })
          }
        switch (s) {
          case 1:
            return e.formatMessage({
              id: "sql_key_constraints.caption.insert_missing_rejected",
              defaultMessage: "Rejected: FK 99 has no parent; the stored rows stay unchanged",
            })
          case 2:
            return e.formatMessage({
              id: "sql_key_constraints.caption.duplicate_rejected",
              defaultMessage: "Rejected: PK 10 is already used; the stored rows stay unchanged",
            })
          case 4:
            return e.formatMessage({
              id: "sql_key_constraints.caption.update_missing_rejected",
              defaultMessage: "Rejected: employee 102 still references 20; no row is changed",
            })
          case 5:
            return e.formatMessage({
              id: "sql_key_constraints.caption.parent_update_rejected",
              defaultMessage: "Rejected: PK 10 is still referenced by employees 101 and 103",
            })
          case 7:
            return e.formatMessage({
              id: "sql_key_constraints.caption.null_pk_rejected",
              defaultMessage: "Rejected: a primary key cannot be NULL",
            })
          default:
            return e.formatMessage({
              id: "sql_key_constraints.caption.rejected",
              defaultMessage: "Rejected: the stored rows stay unchanged",
            })
        }
      },
      b = (e, t) =>
        e.formatMessage(
          { id: "sql_key_constraints.visualization.aria", defaultMessage: "{outcome}: {statement} {result}" },
          { outcome: k(e, t.outcome), statement: y(t.mutation), result: M(e, t) },
        ),
      j = ({ kind: e }) =>
        (0, a.jsx)("span", {
          className:
            "bg-token-bg-tertiary inline-flex min-w-5 items-center justify-center rounded px-1 text-xs font-semibold",
          style: { color: "PK" === e ? g : u },
          children: e,
        }),
      w = ({ children: e, kind: t }) =>
        (0, a.jsx)("th", {
          scope: "col",
          className:
            "text-token-text-primary border-token-border-light h-9 min-w-0 border-b px-0.5 text-center text-xs font-semibold",
          children: (0, a.jsxs)("span", {
            className: "flex min-w-0 flex-col items-center justify-center leading-tight",
            children: [
              (0, a.jsx)("span", { className: "max-w-full break-words whitespace-normal", children: e }),
              t ? (0, a.jsx)(j, { kind: t }) : null,
            ],
          }),
        }),
      v = ({ children: e, highlighted: t = !1, invalid: s = !1 }) =>
        (0, a.jsx)("td", {
          className: (0, r.A)(
            "h-7 min-w-0 border-b border-token-border-light px-0.5 text-center text-xs last:border-b-0",
            !t && !s && "text-token-text-secondary",
            (t || s) && "font-semibold",
          ),
          style: { color: s ? _ : t ? "var(--learning-block-accent)" : void 0 },
          children: (0, a.jsx)("span", {
            className: "block min-w-0 leading-tight break-words whitespace-normal",
            children: e,
          }),
        }),
      N = ({ columns: e, outcome: t, children: s }) => {
        let r = (0, n.A)(),
          i =
            "rejected" === t
              ? r.formatMessage({ id: "sql_key_constraints.candidate.rejected", defaultMessage: "Rejected row" })
              : r.formatMessage({ id: "sql_key_constraints.candidate.proposed", defaultMessage: "Proposed row" })
        return (0, a.jsxs)("div", {
          role: "group",
          "aria-label": i,
          className: "mt-1 min-w-0 rounded border border-dashed",
          style: {
            borderColor: "rejected" === t ? _ : "var(--learning-block-accent)",
            background:
              "rejected" === t
                ? "color-mix(in srgb, var(--text-error) 8%, transparent)"
                : "var(--learning-block-accent-surface)",
          },
          children: [
            (0, a.jsxs)("div", {
              className: "flex h-4 items-center justify-center px-1 text-center text-xs leading-none font-semibold",
              style: { color: "rejected" === t ? _ : "var(--learning-block-accent)" },
              children: ["rejected" === t ? "\xd7" : "?", (0, a.jsx)("span", { className: "sr-only", children: i })],
            }),
            (0, a.jsx)("div", {
              className: "grid min-w-0 border-t",
              style: {
                gridTemplateColumns: e,
                borderColor: "var(--learning-block-visualization-surface, var(--bg-primary))",
              },
              children: s,
            }),
          ],
        })
      },
      I = ({ children: e, highlighted: t = !1, invalid: s = !1 }) =>
        (0, a.jsx)("span", {
          className: (0, r.A)(
            "flex h-7 min-w-0 items-center justify-center px-0.5 text-center text-xs leading-tight",
            (t || s) && "font-semibold",
          ),
          style: { color: s ? _ : t ? "var(--learning-block-accent)" : "var(--text-secondary)" },
          children: e,
        }),
      q = (e) => 64 + 28 * e + 14,
      E = ({ state: e }) => {
        let t = "accepted" !== e.outcome && "employee" === e.proposal.target ? e.proposal.row : void 0,
          s = e.employees.map((t, s) => {
            if (null == t.departmentId) return null
            let r = e.departments.findIndex((e) => e.id === t.departmentId)
            if (r < 0) return null
            let n = null != t.id && e.brokenEmployeeIds.includes(t.id)
            return (0, a.jsx)(
              c.SY,
              {
                from: { x: 42, y: q(s) },
                to: { x: 2, y: q(r) },
                variant: n ? "guideDashed" : "solidNeutral",
                color: n ? _ : u,
                strokeWidth: n ? 2 : 1.5,
                opacity: n ? 1 : void 0,
              },
              `stored-${t.id}`,
            )
          }),
          r = t?.departmentId == null ? -1 : e.departments.findIndex((e) => e.id === t.departmentId),
          n = 64 + 28 * e.employees.length + 20 + 14,
          i =
            t?.departmentId == null
              ? null
              : r < 0
                ? (0, a.jsx)(c.SY, {
                    from: { x: 42, y: n },
                    to: { x: 12, y: n },
                    variant: "guideDashed",
                    color: _,
                    strokeWidth: 2,
                    opacity: 1,
                  })
                : (0, a.jsx)(c.SY, {
                    from: { x: 42, y: n },
                    to: { x: 2, y: q(r) },
                    variant: "solidNeutral",
                    color: u,
                    strokeWidth: 1.5,
                  })
        return (0, a.jsxs)("svg", {
          className: "relationships-VyPhUR",
          viewBox: "0 0 44 198",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: [s, i],
        })
      },
      T = ({ state: e }) => {
        let t = (0, n.A)(),
          s = e.employees.slice(0, 4),
          r = "accepted" !== e.outcome && "employee" === e.proposal.target ? e.proposal.row : void 0,
          i = r ? [...s.slice(0, 3), r] : s,
          l = e.departments.slice(0, 2),
          o = (e, t) => 11 + ((e + 0.5) * 45) / Math.max(1, t)
        return (0, a.jsxs)("div", {
          role: "img",
          "aria-label": b(t, e),
          className: "text-token-text-primary flex h-full w-full items-center justify-center gap-0.5 px-1",
          children: [
            (0, a.jsxs)("div", {
              className: "flex w-7 shrink-0 flex-col items-center gap-0.5",
              children: [
                (0, a.jsx)("span", { className: "text-xs font-semibold", style: { color: g }, children: "PK" }),
                l.map((e) =>
                  (0, a.jsx)(
                    "span",
                    {
                      className:
                        "bg-token-bg-tertiary flex h-4 w-6 items-center justify-center rounded text-xs font-semibold",
                      style: { color: g },
                      children: f(t, e.id),
                    },
                    e.id,
                  ),
                ),
              ],
            }),
            (0, a.jsx)("svg", {
              className: "h-14 w-4 shrink-0",
              viewBox: "0 0 18 56",
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              children: i.map((e, t) => {
                if (null == e.departmentId) return null
                let s = l.findIndex((t) => t.id === e.departmentId),
                  r = s < 0
                return (0, a.jsx)(
                  c.SY,
                  {
                    from: { x: 17, y: o(t, i.length) },
                    to: { x: r ? 7 : 1, y: r ? o(t, i.length) : o(s, l.length) },
                    variant: r ? "guideDashed" : "solidNeutral",
                    color: r ? _ : u,
                    strokeWidth: r ? 1.5 : 1.2,
                    opacity: r ? 1 : void 0,
                  },
                  `thumbnail-${e.id ?? "null"}-${t}`,
                )
              }),
            }),
            (0, a.jsxs)("div", {
              className: "flex w-7 shrink-0 flex-col items-center gap-0.5",
              children: [
                (0, a.jsx)("span", { className: "text-xs font-semibold", style: { color: u }, children: "FK" }),
                i.map((e, s) =>
                  (0, a.jsx)(
                    "span",
                    {
                      className:
                        "bg-token-bg-tertiary flex h-3.5 w-6 items-center justify-center rounded text-xs font-semibold",
                      style: { color: null == e.departmentId || l.some((t) => t.id === e.departmentId) ? u : _ },
                      children: f(t, e.departmentId),
                    },
                    `thumbnail-value-${e.id ?? "null"}-${s}`,
                  ),
                ),
              ],
            }),
          ],
        })
      },
      A = ({ values: e, presentationMode: t }) => {
        let s = (0, n.A)(),
          i = m(e)
        if ("thumbnail" === t) return (0, a.jsx)(T, { state: i })
        let l = "accepted" === i.outcome ? null : i.outcome,
          o = l && "department" === i.proposal.target ? i.proposal.row : void 0,
          d = l && "employee" === i.proposal.target ? i.proposal.row : void 0
        return (0, a.jsxs)("div", {
          role: "group",
          "aria-label": b(s, i),
          "data-learning-block-wide-width": "42rem",
          className: (0, r.A)(
            "text-token-text-primary mx-auto flex h-[296px] w-full max-w-2xl flex-col items-center justify-center gap-2 px-6 pb-6",
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex min-h-10 w-full min-w-0 flex-col items-center justify-center gap-0.5 text-center",
              children: [
                (0, a.jsx)("span", {
                  className: "rounded-full px-2 py-0.5 text-xs font-semibold",
                  style: {
                    color: "accepted" === i.outcome ? u : "rejected" === i.outcome ? _ : "var(--text-secondary)",
                    background:
                      "accepted" === i.outcome
                        ? "color-mix(in srgb, var(--learning-block-color-companion) 12%, transparent)"
                        : "rejected" === i.outcome
                          ? "color-mix(in srgb, var(--text-error) 10%, transparent)"
                          : "var(--bg-tertiary)",
                  },
                  children: k(s, i.outcome),
                }),
                (0, a.jsx)("code", {
                  className:
                    "text-token-text-secondary block max-w-full text-xs font-semibold break-words whitespace-normal",
                  children: y(i.mutation),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: (0, r.A)("diagram-T5nd4x", "grid w-full max-w-xl min-w-0 items-start gap-0"),
              children: [
                (0, a.jsxs)("div", {
                  className: "min-w-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "border-token-border-light overflow-hidden rounded-lg border",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "bg-token-bg-tertiary text-token-text-primary flex h-7 items-center justify-center px-1 text-center text-xs leading-tight font-semibold break-words whitespace-normal",
                          children: s.formatMessage({
                            id: "sql_key_constraints.table.departments",
                            defaultMessage: "Departments",
                          }),
                        }),
                        (0, a.jsxs)("table", {
                          className: "w-full table-fixed border-collapse",
                          "aria-label": s.formatMessage({
                            id: "sql_key_constraints.table.departments_aria",
                            defaultMessage: "Stored departments and their primary keys",
                          }),
                          children: [
                            (0, a.jsxs)("colgroup", {
                              children: [
                                (0, a.jsx)("col", { className: "w-[62%]" }),
                                (0, a.jsx)("col", { className: "w-[38%]" }),
                              ],
                            }),
                            (0, a.jsx)("thead", {
                              children: (0, a.jsxs)("tr", {
                                children: [
                                  (0, a.jsx)(w, {
                                    children: s.formatMessage({
                                      id: "sql_key_constraints.column.name",
                                      defaultMessage: "name",
                                    }),
                                  }),
                                  (0, a.jsx)(w, {
                                    kind: "PK",
                                    children: s.formatMessage({
                                      id: "sql_key_constraints.column.dept_id",
                                      defaultMessage: "id",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("tbody", {
                              children: i.departments.map((e) =>
                                (0, a.jsxs)(
                                  "tr",
                                  {
                                    children: [
                                      (0, a.jsx)(v, { children: x(s, e.name) }),
                                      (0, a.jsx)(v, {
                                        highlighted: i.highlightedParentIds.includes(e.id),
                                        invalid: 2 === i.mutation && 10 === e.id,
                                        children: f(s, e.id),
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o && l
                      ? (0, a.jsxs)(N, {
                          columns: "62% 38%",
                          outcome: l,
                          children: [
                            (0, a.jsx)(I, { children: x(s, o.name) }),
                            (0, a.jsx)(I, { invalid: !0, children: f(s, o.id) }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(E, { state: i }),
                (0, a.jsxs)("div", {
                  className: "min-w-0",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "border-token-border-light overflow-hidden rounded-lg border",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "bg-token-bg-tertiary text-token-text-primary flex h-7 items-center justify-center px-1 text-center text-xs leading-tight font-semibold break-words whitespace-normal",
                          children: s.formatMessage({
                            id: "sql_key_constraints.table.employees",
                            defaultMessage: "Employees",
                          }),
                        }),
                        (0, a.jsxs)("table", {
                          className: "w-full table-fixed border-collapse",
                          "aria-label": s.formatMessage({
                            id: "sql_key_constraints.table.employees_aria",
                            defaultMessage: "Stored employees with foreign and primary keys",
                          }),
                          children: [
                            (0, a.jsxs)("colgroup", {
                              children: [
                                (0, a.jsx)("col", { className: "w-[36%]" }),
                                (0, a.jsx)("col", { className: "w-[30%]" }),
                                (0, a.jsx)("col", { className: "w-[34%]" }),
                              ],
                            }),
                            (0, a.jsx)("thead", {
                              children: (0, a.jsxs)("tr", {
                                children: [
                                  (0, a.jsx)(w, {
                                    kind: "FK",
                                    children: s.formatMessage({
                                      id: "sql_key_constraints.column.employee_dept_id",
                                      defaultMessage: "dept",
                                    }),
                                  }),
                                  (0, a.jsx)(w, {
                                    kind: "PK",
                                    children: s.formatMessage({
                                      id: "sql_key_constraints.column.emp_id",
                                      defaultMessage: "id",
                                    }),
                                  }),
                                  (0, a.jsx)(w, {
                                    children: s.formatMessage({
                                      id: "sql_key_constraints.column.employee_name",
                                      defaultMessage: "name",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("tbody", {
                              children: i.employees.map((e) =>
                                (0, a.jsxs)(
                                  "tr",
                                  {
                                    children: [
                                      (0, a.jsx)(v, {
                                        highlighted: null != e.id && i.highlightedEmployeeIds.includes(e.id),
                                        invalid: null != e.id && i.brokenEmployeeIds.includes(e.id),
                                        children: f(s, e.departmentId),
                                      }),
                                      (0, a.jsx)(v, { children: f(s, e.id) }),
                                      (0, a.jsx)(v, { children: h(s, e.name) }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    d && l
                      ? (0, a.jsxs)(N, {
                          columns: "36% 30% 34%",
                          outcome: l,
                          children: [
                            (0, a.jsx)(I, {
                              highlighted: null != d.departmentId && i.departments.some((e) => e.id === d.departmentId),
                              invalid: null != d.departmentId && !i.departments.some((e) => e.id === d.departmentId),
                              children: f(s, d.departmentId),
                            }),
                            (0, a.jsx)(I, { invalid: null == d.id, children: f(s, d.id) }),
                            (0, a.jsx)(I, { children: h(s, d.name) }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            }),
          ],
        })
      },
      L = ({ values: e, setValues: t }) => {
        let s = (0, n.A)(),
          r = m(e)
        return (0, a.jsxs)(l.Ur, {
          screenReaderContent: s.formatMessage({
            id: "sql_key_constraints.controls.help",
            defaultMessage:
              "Choose a proposed row change, apply it to test the key constraints, or restore the initial rows.",
          }),
          children: [
            (0, a.jsx)(d.J, {
              inputs: [
                {
                  min: 0,
                  max: 7,
                  step: 1,
                  value: r.mutation,
                  options: (0, o.xT)([
                    {
                      value: 0,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.insert_valid",
                        defaultMessage: "Insert \xb7 valid FK",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.insert_valid_aria",
                        defaultMessage: "Insert a child with an existing parent",
                      }),
                    },
                    {
                      value: 1,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.insert_missing",
                        defaultMessage: "Insert \xb7 missing FK",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.insert_missing_aria",
                        defaultMessage: "Insert a child with a missing parent",
                      }),
                    },
                    {
                      value: 2,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.insert_duplicate",
                        defaultMessage: "Insert \xb7 duplicate PK",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.insert_duplicate_aria",
                        defaultMessage: "Insert a duplicate parent key",
                      }),
                    },
                    {
                      value: 3,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.update_valid",
                        defaultMessage: "Update child \xb7 valid",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.update_valid_aria",
                        defaultMessage: "Update a child to another existing parent",
                      }),
                    },
                    {
                      value: 4,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.update_missing",
                        defaultMessage: "Update child \xb7 missing",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.update_missing_aria",
                        defaultMessage: "Update a child to a missing parent",
                      }),
                    },
                    {
                      value: 5,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.update_parent",
                        defaultMessage: "Update parent key",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.update_parent_aria",
                        defaultMessage: "Update a referenced parent key",
                      }),
                    },
                    {
                      value: 6,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.insert_null_fk",
                        defaultMessage: "Insert \xb7 NULL FK",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.insert_null_fk_aria",
                        defaultMessage: "Insert a child with a nullable foreign key",
                      }),
                    },
                    {
                      value: 7,
                      label: s.formatMessage({
                        id: "sql_key_constraints.option.insert_null_pk",
                        defaultMessage: "Insert \xb7 NULL PK",
                      }),
                      ariaLabel: s.formatMessage({
                        id: "sql_key_constraints.option.insert_null_pk_aria",
                        defaultMessage: "Insert a child with a null primary key",
                      }),
                    },
                  ]),
                  ariaLabel: s.formatMessage({
                    id: "sql_key_constraints.controls.mutation",
                    defaultMessage: "Proposed row change",
                  }),
                  onChange: (e) =>
                    t((t) => ({ ...t, mutation: p(e), applied: !1 }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE"),
                },
              ],
            }),
            (0, a.jsxs)(i.Z, {
              columns: 2,
              children: [
                (0, a.jsx)(i.Q, {
                  disabled: r.applied,
                  onClick: () => t((e) => ({ ...e, applied: !0 }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_ENTER_COMMIT"),
                  children: s.formatMessage({ id: "sql_key_constraints.controls.apply", defaultMessage: "Apply" }),
                }),
                (0, a.jsx)(i.Q, {
                  onClick: () => t((e) => ({ ...e, applied: !1 }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_ENTER_COMMIT"),
                  children: s.formatMessage({ id: "sql_key_constraints.controls.restore", defaultMessage: "Reset" }),
                }),
              ],
            }),
          ],
        })
      },
      K = ({ values: e }) => {
        let t = (0, n.A)()
        return (0, a.jsx)(l.Vq, { reserveLines: 2, children: (0, a.jsx)(l.OZ, { children: M(t, m(e)) }) })
      }
  },
}
//# sourceMappingURL=567182.6e75a7a243.js.map
