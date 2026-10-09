"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Printer,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { RESUME_DATA } from "@/lib/resume-data";

export function ResumeView() {
  useEffect(() => {
    // If URL has ?download=true, trigger direct PDF download; if ?print=true, open print dialog
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("download") === "true") {
        const link = document.createElement("a");
        link.href = "/documents/resume.pdf";
        link.download = "Apurv_Singhal_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (params.get("print") === "true") {
        setTimeout(() => {
          window.print();
        }, 400);
      }
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const capgeminiRoles = RESUME_DATA.experience.filter(
    (e) => e.company === "Capgemini"
  );
  const priorRoles = RESUME_DATA.experience.filter(
    (e) => e.company !== "Capgemini"
  );

  return (
    <div className="min-h-screen bg-muted/30 text-foreground py-6 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:text-slate-900">
      {/* Top Action Toolbar (Hidden in Print) */}
      <aside
        aria-label="Resume Actions"
        className="max-w-4xl mx-auto mb-6 print:hidden"
      >
        <div className="bg-background/90 backdrop-blur-md border border-border/80 rounded-xl p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
              title="Print directly to your printer"
            >
              <Printer size={14} />
              Print
            </button>
            <a
              href="/documents/resume.pdf"
              download="Apurv_Singhal_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:shadow cursor-pointer"
              title="Download high-fidelity A4 vector PDF directly"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>
      </aside>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto bg-card text-card-foreground border border-border/60 rounded-xl shadow-xl p-6 sm:p-10 print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-none print:bg-white print:text-slate-900 font-sans">
        
        {/* ============================================================== */}
        {/* PAGE 1 CONTAINER                                               */}
        {/* ============================================================== */}
        <div className="print-page print-page-1">
          <div className="print:flex-1">
            {/* Executive Header */}
            <header className="border-b border-border/80 print:border-slate-300 pb-3 print:pb-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground print:text-slate-950 print:text-[24px]">
                    <a
                      href={RESUME_DATA.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {RESUME_DATA.name}
                    </a>
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-primary print:text-indigo-800 print:text-[12px] mt-0.5">
                    {RESUME_DATA.title}
                  </p>
                </div>
                
                {/* Core Focus Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mt-1 sm:mt-0 print:hidden">
                  {RESUME_DATA.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="px-2 py-0.5 rounded text-[10.5px] font-semibold bg-primary/10 text-primary border border-primary/20"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Strip */}
              <div className="mt-2 text-xs text-muted-foreground print:text-slate-600 print:text-[10.5px] flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={11} className="print:hidden text-primary" />
                  {RESUME_DATA.location}
                </span>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <span className="font-medium text-foreground print:text-slate-900 inline-flex items-center gap-1">
                  <ShieldCheck size={11} className="print:hidden text-primary" />
                  {RESUME_DATA.workRights}
                </span>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="inline-flex items-center gap-1 hover:text-foreground print:text-slate-800 hover:underline"
                >
                  <Mail size={11} className="print:hidden text-primary" />
                  {RESUME_DATA.email}
                </a>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <a
                  href={RESUME_DATA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-foreground print:text-indigo-800 hover:underline font-semibold"
                >
                  <Globe size={11} className="print:hidden text-primary" />
                  apurvsinghal.com
                </a>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <a
                  href="https://www.admguard.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground print:text-indigo-800 hover:underline font-semibold"
                >
                  admguard.com.au
                </a>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground print:text-slate-800 hover:underline"
                >
                  linkedin.com/in/apurvsinghal28
                </a>
                <span className="text-slate-300 print:text-slate-400">•</span>
                <a
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground print:text-slate-800 hover:underline"
                >
                  github.com/apurvsinghal
                </a>
              </div>
            </header>

            {/* Section: Executive Summary */}
            <section className="mt-3.5 print:mt-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Executive Summary
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground print:text-slate-800 print:text-[11px] print:leading-[1.45] pl-2.5 border-l-2 border-border/40 print:border-indigo-100">
                {RESUME_DATA.summary}
              </p>
            </section>

            {/* Section: Core Technical Competencies & Architecture Tooling */}
            <section className="mt-3.5 print:mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Technical Competencies & Tooling
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:gap-1.5">
                {RESUME_DATA.skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="border border-border/70 print:border-slate-200 rounded-md p-2 print:p-1.5 bg-muted/20 print:bg-slate-50/70"
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      {idx === 0 && <Cpu size={12} className="text-indigo-600 print:text-indigo-700" />}
                      {idx === 1 && <Layers size={12} className="text-indigo-600 print:text-indigo-700" />}
                      {idx === 2 && <Sparkles size={12} className="text-indigo-600 print:text-indigo-700" />}
                      {idx === 3 && <ShieldCheck size={12} className="text-indigo-600 print:text-indigo-700" />}
                      <span className="font-bold text-foreground print:text-slate-950 text-xs print:text-[10.5px]">
                        {skillGroup.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground print:text-slate-700 text-[10.5px] leading-snug">
                      {skillGroup.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Professional Experience (Capgemini Engagements) */}
            <section className="mt-3.5 print:mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Enterprise Platform Experience
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              {/* Capgemini Header Card */}
              <div className="bg-primary/5 print:bg-slate-100/90 border border-primary/20 print:border-slate-300 rounded-md px-3 py-1.5 mb-2">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xs sm:text-sm font-extrabold text-foreground print:text-slate-950 print:text-[12.5px]">
                      <a
                        href="https://www.capgemini.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Capgemini
                      </a>
                    </h3>
                    <span className="text-xs font-semibold text-primary print:text-indigo-800 print:text-[11px]">
                      Lead Consultant · Cloud & Platforms Practice
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground print:text-slate-700 tabular-nums print:text-[10.5px]">
                    2021 — Present | Melbourne, Australia
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground print:text-slate-600 italic mt-0.5">
                  Delivered across multiple client engagements, some concurrent.
                </p>
              </div>

              {/* Capgemini Client Engagements Timeline */}
              <div className="space-y-2 print:space-y-1.5 pl-2 border-l-2 border-border/60 print:border-indigo-200 ml-1">
                {capgeminiRoles.map((role, rIdx) => (
                  <div key={rIdx} className="break-inside-avoid relative pl-2">
                    {/* Timeline node pip */}
                    <span className="absolute -left-[13px] top-1.5 w-2 h-2 rounded-full bg-primary print:bg-indigo-600 ring-2 ring-background print:ring-white" />

                    <div className="flex items-baseline justify-between gap-1">
                      <h4 className="text-xs font-bold text-foreground print:text-slate-900 print:text-[11px]">
                        <span className="text-primary print:text-indigo-900">
                          Client: {role.client}
                        </span>
                        <span className="font-normal text-muted-foreground print:text-slate-500"> — </span>
                        <span className="font-semibold text-foreground print:text-slate-800">
                          {role.role}
                        </span>
                      </h4>
                      <span className="text-[10px] text-muted-foreground print:text-slate-600 font-mono tabular-nums">
                        {role.period}
                      </span>
                    </div>

                    <ul className="mt-0.5 space-y-0.5 text-xs text-muted-foreground print:text-slate-700 list-disc list-outside pl-4 print:text-[10.5px] print:leading-[1.4]">
                      {role.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Option B: Minimalist Page 1 Counter Pinned to Bottom */}
          <footer className="hidden print:flex items-center justify-end text-[9.5px] text-slate-500 pt-2 shrink-0">
            <span>Page 1 of 2</span>
          </footer>
        </div>

        {/* ============================================================== */}
        {/* PAGE 2 CONTAINER                                               */}
        {/* ============================================================== */}
        <div className="print-page print-page-2">
          <div className="print:flex-1">
            {/* Page 2 Running Header */}
            <div className="hidden print:flex items-center justify-between pb-1 mb-2 border-b border-slate-300 text-[9.5px] text-slate-600">
              <span className="font-bold text-slate-900 uppercase tracking-wider">
                <a
                  href="https://apurvsinghal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-slate-900"
                >
                  Apurv Singhal
                </a>{" "}
                · Senior Platform & Cloud DevOps Engineer
              </span>
              <a
                href="https://apurvsinghal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-800 hover:underline"
              >
                apurvsinghal.com
              </a>
            </div>

            {/* Section: Prior Experience */}
            <section className="mt-5 print:mt-1 break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Prior Professional Experience
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              <div className="space-y-2.5 print:space-y-1.5">
                {priorRoles.map((role, idx) => (
                  <div key={idx} className="break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-1">
                      <h3 className="text-xs font-bold text-foreground print:text-slate-950 print:text-[11.5px]">
                        {role.companyUrl ? (
                          <a
                            href={role.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {role.company}
                          </a>
                        ) : (
                          <span>{role.company}</span>
                        )}
                        <span className="font-normal text-muted-foreground print:text-slate-500"> — </span>
                        <span className="font-semibold text-primary print:text-indigo-900">
                          {role.role}
                        </span>
                      </h3>
                      <span className="text-[10px] text-muted-foreground print:text-slate-600 font-mono tabular-nums">
                        {role.period} | {role.location}
                      </span>
                    </div>

                    <ul className="mt-0.5 space-y-0.5 text-xs text-muted-foreground print:text-slate-700 list-disc list-outside pl-4 print:text-[10.5px] print:leading-[1.4]">
                      {role.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Featured Venture */}
            <section className="mt-3.5 print:mt-2.5 break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Featured Venture
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              {RESUME_DATA.projects.slice(0, 1).map((proj, idx) => (
                <div
                  key={idx}
                  className="border border-border/80 print:border-slate-300 rounded-lg p-2.5 print:p-2 bg-muted/15 print:bg-slate-50/70"
                >
                  <div className="flex items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-extrabold text-foreground print:text-slate-950 print:text-[12px]">
                        {proj.url ? (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {proj.name}
                          </a>
                        ) : (
                          proj.name
                        )}
                      </h3>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-primary/15 text-primary print:bg-indigo-100 print:text-indigo-900 border border-primary/20 print:border-indigo-200">
                        {proj.role}
                      </span>
                      {proj.url && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary print:text-indigo-800 hover:underline text-[10.5px] print:text-[10px] font-semibold print:font-mono inline-flex items-center gap-0.5"
                        >
                          admguard.com.au <ExternalLink size={10} className="print:hidden" />
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground print:text-slate-600 font-mono tabular-nums">
                      {proj.period || "2024 — Present"}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-foreground print:text-slate-800 font-medium">
                    {proj.description}
                  </p>

                  <ul className="mt-1 space-y-0.5 text-xs text-muted-foreground print:text-slate-700 list-disc list-outside pl-4 print:text-[10.5px] print:leading-[1.4]">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Section: Selected Projects */}
            <section className="mt-3.5 print:mt-2.5 break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Selected Projects
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              {RESUME_DATA.projects.slice(1).map((proj, idx) => (
                <div
                  key={idx}
                  className="border border-border/70 print:border-slate-200 rounded-md p-2 print:p-1.5 bg-muted/15 print:bg-slate-50/70"
                >
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="text-xs font-bold text-foreground print:text-slate-950 print:text-[11.5px]">
                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {proj.name}
                        </a>
                      ) : (
                        <span>{proj.name}</span>
                      )}
                      <span className="font-normal text-muted-foreground print:text-slate-500"> — </span>
                      {proj.url && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary print:text-indigo-800 hover:underline"
                        >
                          apurvsinghal.com
                        </a>
                      )}
                    </h3>
                  </div>

                  <p className="mt-0.5 text-xs text-muted-foreground print:text-slate-700 print:text-[10.5px] print:leading-[1.4]">
                    {proj.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Section: Community Leadership */}
            <section className="mt-3.5 print:mt-2.5 break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Community Leadership
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              {RESUME_DATA.volunteer.map((item, idx) => (
                <div key={idx} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="text-xs font-bold text-foreground print:text-slate-950 print:text-[11.5px]">
                      {item.organizationUrl ? (
                        <a
                          href={item.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.organization}
                        </a>
                      ) : (
                        <span>{item.organization}</span>
                      )}
                      <span className="font-normal text-muted-foreground print:text-slate-500"> — </span>
                      <span className="font-semibold text-primary print:text-indigo-900">
                        {item.role}
                      </span>
                    </h3>
                    <span className="text-[10px] text-muted-foreground print:text-slate-600 font-mono tabular-nums">
                      {item.period} | {item.location}
                    </span>
                  </div>

                  <ul className="mt-0.5 space-y-0.5 text-xs text-muted-foreground print:text-slate-700 list-disc list-outside pl-4 print:text-[10.5px] print:leading-[1.4]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Section: Education & Credentials */}
            <section className="mt-4 print:mt-3 break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-3 bg-primary print:bg-indigo-700 rounded-sm inline-block" />
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground print:text-slate-900 print:text-[11px]">
                  Education & Credentials
                </h2>
                <div className="h-[1px] bg-border/60 print:bg-slate-200 flex-1" />
              </div>

              <div className="border border-border/70 print:border-slate-200 rounded-md p-2.5 print:p-2 bg-muted/15 print:bg-slate-50/70 space-y-1 text-xs">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex items-baseline justify-between gap-1"
                  >
                    <div>
                      <span className="font-bold text-foreground print:text-slate-950 print:text-[11px]">
                        {edu.degree}
                      </span>
                      <span className="text-muted-foreground print:text-slate-600 print:text-[11px]">
                        {" "}— {edu.institution}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground print:text-slate-600 tabular-nums">
                      {edu.period}
                    </div>
                  </div>
                ))}

                <div className="pt-0.5 text-[10.5px] text-muted-foreground print:text-slate-700 border-t border-border/50 print:border-slate-200">
                  <span className="font-bold text-foreground print:text-slate-900">
                    Credentials:
                  </span>{" "}
                  {RESUME_DATA.certifications.join(" · ")}
                </div>
              </div>
            </section>
          </div>

          {/* Option B: Minimalist Page 2 Counter Pinned to Bottom */}
          <footer className="hidden print:flex items-center justify-end text-[9.5px] text-slate-500 pt-2 shrink-0">
            <span>Page 2 of 2</span>
          </footer>
        </div>
      </main>

      {/* Embedded Print CSS Rules for Exact Physical Page Box Modeling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              @page {
                size: A4 portrait;
                margin: 9mm 13mm 9mm 13mm;
              }
              html {
                font-size: 12.5px !important;
                line-height: 1.4 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
              }
              html, body {
                background-color: #ffffff !important;
                color: #0f172a !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                height: auto !important;
                min-height: 0 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
              }
              body {
                padding: 0 !important;
                margin: 0 !important;
              }
              * {
                -webkit-text-size-adjust: 100% !important;
              }
              a {
                text-decoration: none !important;
              }
              li {
                orphans: 2;
                widows: 2;
              }
              h2, h3, h4 {
                break-after: avoid;
                page-break-after: avoid;
              }
              .break-inside-avoid {
                break-inside: avoid;
                page-break-inside: avoid;
              }
              .print-page {
                height: 279mm !important;
                max-height: 279mm !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
                box-sizing: border-box !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              .print-page-1 {
                page-break-after: always !important;
                break-after: page !important;
              }
            }
          `,
        }}
      />
    </div>
  );
}
